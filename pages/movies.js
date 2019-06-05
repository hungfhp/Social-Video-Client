import React, { Component } from 'react'
// import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import main from '../common/main'
import Layout from '../containers/Layout/Layout'
import Content from '../modules/movies'
import reducer from '../modules/movies/reducer'
import { getMovies, searchMovies } from '../modules/movies/action'
import { openLeftSideAction, getSuggestMovies } from '../common/action'

// import { red } from '@material-ui/core/colors';
// import _ from 'lodash'

@main({
  Layout: Layout,
  reducers: {
    movies: reducer
  },
  routeName: 'movies'
})
export default class HomePage extends Component {
  static async getInitialProps({ store, store: { dispatch }, query, req, ...rest }) {
    let promises = []
    await dispatch(openLeftSideAction(true))
    if (query.keyword) {
      promises.push(dispatch(searchMovies(query.keyword)))
    } else {
      promises.push(dispatch(getMovies()))
    }
    promises.push(dispatch(getSuggestMovies()))

    await Promise.all(promises)
    return {}
  }
  render() {
    return <Content {...this.props} />
  }
}
