import React, { Component } from 'react'
// import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import main from '../common/main'
import Layout from '../containers/Layout/Layout'
import Content from '../modules/movie'
import reducer from '../modules/movie/reducer'
import reducerHome from '../modules/home/reducer'
import { getMovieById } from '../modules/movie/action'
import { getSuggestMovies } from '../modules/home/action'
import { openLeftSideAction, getOptionsGenres } from '../common/action'

// import { red } from '@material-ui/core/colors';
// import _ from 'lodash'

@main({
  Layout: Layout,
  reducers: {
    movie: reducer,
    home: reducerHome
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
    }

    promises.push(dispatch(getSuggestMovies()))

    await Promise.all(promises)
    return {}
  }
  render() {
    return <Content {...this.props} />
  }
}
