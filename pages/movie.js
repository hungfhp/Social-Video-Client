import React, { Component } from 'react'
// import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import main from '../common/main'
import Layout from '../containers/Layout/Layout'
import Content from '../modules/movie'
import reducer from '../modules/movie/reducer'
import { getMovieById } from '../modules/movie/action'
import { openLeftSideAction } from '../common/action'

// import { red } from '@material-ui/core/colors';
// import _ from 'lodash'

@main({
  Layout: Layout,
  reducers: {
    movie: reducer
  },
  translationNameSpaces: ['movie'],
  routeName: 'movie'
})
export default class MoviePage extends Component {
  static async getInitialProps({ store, store: { dispatch }, query, req, ...rest }) {
    await dispatch(getMovieById(query.movieId))
    await dispatch(openLeftSideAction(false))
    return {}
  }
  render() {
    return <Content {...this.props} />
  }
}
