import React, { Component } from 'react'
// import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import main from '../common/main'
import Layout from '../containers/Layout/Layout'
import Content from '../modules/profile'
import reducer from '../modules/profile/reducer'

import { openLeftSideAction } from '../common/action'
import {
  getMoviesOwn,
  // getMoviesLiked,
  // getMoviesFollowed,
  getProfile
} from '../modules/profile/action'
// import _ from 'lodash'
import { pushRoute } from '../components/Link'
import { updateUrlParameter } from '../common/utils/url'

@main({
  Layout: Layout,
  reducers: {
    profile: reducer
  },
  translationNameSpaces: ['profile'],
  routeName: 'profile'
})
export default class ProfilePage extends Component {
  static async getInitialProps({ store, store: { dispatch }, query, req, ...rest }) {
    let promises = []
    promises.push(dispatch(openLeftSideAction(false)))
    let userId = query.userId
    const isAuthenticated = store.getState().common.isAuthenticated
    if (!isAuthenticated) {
      pushRoute(updateUrlParameter(`/home`, 'role', 'viewer'))
    }

    if (userId === 'me') {
      userId = store.getState().common.user._id
    }
    promises.push(dispatch(getProfile(req, userId)))
    promises.push(dispatch(getMoviesOwn(req, userId)))
    await Promise.all(promises)

    return { userId }
  }
  render() {
    return <Content {...this.props} />
  }
}
