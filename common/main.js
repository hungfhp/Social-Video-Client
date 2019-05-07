import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from './store'
import { loadCommonData, loginSuccessAction } from './action'
// import { startI18n, getTranslation } from './languages/translationHelper'
// import { I18nextProvider } from 'react-i18next'
import _ from 'lodash'
import fetchApi from './utils/fetchApi'
import { getNativeRootURL } from './utils/url'
import wCache from './utils/wCache'
import { ToastProvider } from 'react-toast-notifications'
// import { isInspectionRequired } from './constants'
// import * as cookies from './utils/cookie'
import cookies from 'next-cookies'

export default ({ Layout, reducers, routeName, translationNameSpaces }) => Page =>
  class MAIN extends React.Component {
    static async getInitialProps(ctx) {
      const isServer = !!ctx.req
      const store = (reducers && initStore(isServer, reducers)) || null
      const initCommonData = _.get(store.getState(), 'common', {})
      const commonData = await MAIN.getCommonData(ctx)
      await store.dispatch(loadCommonData(_.assign(initCommonData, commonData)))

      const pageProps =
        (await (Page.getInitialProps && Page.getInitialProps({ ...ctx, store }))) || {}
      const initialState = store.getState()

      const location = {
        asPath: ctx.asPath,
        pathname: ctx.pathname,
        query: ctx.query,
        url: getNativeRootURL(ctx.req) + ctx.asPath
      }

      return {
        ...pageProps,
        location,
        isServer,
        pathname: ctx.pathname,
        query: ctx.query,
        commonData,
        initialState,
        routeName
      }
    }

    constructor(props) {
      super(props)
      const i18n = null
      const store = (reducers && initStore(props.isServer, reducers, props.initialState)) || null
      const locale = null
      this.state = {
        i18n,
        store,
        locale
      }
    }

    static async getCommonData(ctx) {
      if (wCache.getCache('commonData')) {
        let data = wCache.getCache('commonData')
        return data // Fetch commonData only once, do not request again while navigate between next pages
      }
      try {
        const { token } = cookies(ctx)
        if (token && ctx.req && ctx.req.headers && ctx.req.headers.cookie) {
          ctx.req.headers.authorization = token
          let res = await fetchApi('/users/me', {}, ctx.req)
          let commonData = {
            isAuthenticated: true,
            user: res.data && res.data.data
          }
          return commonData
        }
        return {}
      } catch (err) {
        console.error(err.message)
        return null
      }
    }

    componentDidMount() {
      const { commonData } = this.props
      wCache.updateCache('commonData', commonData)
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <ToastProvider placement="bottom-left">
            <Layout {...this.props}>
              <Page {...this.props} />
            </Layout>
          </ToastProvider>
        </Provider>
      )
    }
  }
