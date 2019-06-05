import React, { Component } from 'react'
// import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import main from '../common/main'
import Layout from '../containers/Layout/Layout'
import Content from '../modules/movie'
import reducer from '../modules/movie/reducer'
import commonReducer from '../common/reducer'
import {
  getMovieById,
  checkOwn,
  getLike,
  getFollow,
  getRate
} from '../modules/movie/action'
import { getSuggestMovies } from '../common/action'
import { openLeftSideAction, getOptionsGenres } from '../common/action'

// import { red } from '@material-ui/core/colors';
// import _ from 'lodash'

@main({
  Layout: Layout,
  reducers: {
    movie: reducer,
    common: commonReducer
  },
  translationNameSpaces: ['movie'],
  routeName: 'movie'
})
export default class MoviePage extends Component {
  static async getInitialProps({ store, store: { dispatch }, query, req, ...rest }) {
    let promises = []
    promises.push(dispatch(openLeftSideAction(false)))
    if (query.action !== 'create') {
      promises.push(dispatch(getMovieById(query.movieId)))
      const userId = store.getState().common.user._id
      if (userId) {
        promises.push(dispatch(checkOwn(req, userId, query.movieId)))
        promises.push(dispatch(getLike(userId, query.movieId)))
        promises.push(dispatch(getFollow(userId, query.movieId)))
        promises.push(dispatch(getRate(userId, query.movieId)))
      }
    }

    promises.push(dispatch(getSuggestMovies()))

    await Promise.all(promises)
    return {}
  }
  render() {
    return <Content {...this.props} />
  }
}
