// import React, { Component } from 'react'
// // import Head from 'next/head'
// // import './styles.scss'
// // import image from '~/assets/img/bg7.jpg'
// import main from '../common/main'
// import Layout from '../containers/Layout/Layout'
// import Content from '../modules/movies'
// // import reducer from '../modules/movies/reducer'
// // import { getSuggestMovies } from '../modules/movies/action'
// import { openLeftSideAction } from '../common/action'

// // import { red } from '@material-ui/core/colors';
// // import _ from 'lodash'

// @main({
//   Layout: Layout,
//   reducers: {
//     // movies: reducer
//   },
//   // translationNameSpaces: ['movies'],
//   routeName: 'movies'
// })
// export default class HomePage extends Component {
//   static async getInitialProps({ store, store: { dispatch }, query, req, ...rest }) {
//     // let promises = []
//     // await dispatch(getSuggestMovies())
//     await dispatch(openLeftSideAction(true))

//     // await Promise.all(dispatch(getSuggestMovies()))
//     return {}
//   }
//   render() {
//     return <Content {...this.props} />
//   }
// }
