import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from './store'
// import { loadMasterData } from './action'
// import { startI18n, getTranslation } from './languages/translationHelper'
// import { I18nextProvider } from 'react-i18next'
// import _ from 'lodash'
import fetchApi from './utils/fetchApi'
import { getNativeRootURL } from './utils/url'
import wCache from './utils/wCache'
import { ToastProvider } from 'react-toast-notifications'
// import { isInspectionRequired } from './constants'

export default ({ Layout, reducers, routeName, translationNameSpaces }) => Page =>
  class MAIN extends React.Component {
    static async getInitialProps(ctx) {
      const isServer = !!ctx.req
      const store = (reducers && initStore(isServer, reducers)) || null
      const initialState = store.getState()
      const pageProps =
        (await (Page.getInitialProps && Page.getInitialProps({ ...ctx, store }))) || {}
      const location = {
        asPath: ctx.asPath,
        pathname: ctx.pathname,
        query: ctx.query,
        url: getNativeRootURL(ctx.req) + ctx.asPath
      }
      const masterData = await MAIN.getMasterData(ctx)

      console.log(masterData)
      return {
        ...pageProps,
        location,
        isServer,
        pathname: ctx.pathname,
        query: ctx.query,
        masterData,
        // translationData,
        initialState,
        // locale,
        routeName
      }
    }

    constructor(props) {
      super(props)
      const i18n = null
      const store = (reducers && initStore(props.isServer, reducers)) || null
      const locale = null
      this.state = {
        i18n,
        store,
        locale
      }
    }

    static async getMasterData(ctx) {
      if (wCache.getCache('masterData')) {
        let data = wCache.getCache('masterData')
        return data // Fetch masterData only once, do not request again while navigate between next pages
      }
      try {
        let masterData = await fetchApi('/users/current', {}, ctx.req)
        let data = masterData.data
        return data
      } catch (err) {
        console.error(err.message)
        return null
      }
    }

    componentDidMount() {
      const { masterData } = this.props
      wCache.updateCache('masterData', masterData)
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
