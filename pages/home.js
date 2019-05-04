import React, { Component } from 'react'
// import Head from 'next/head'
// import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import main from '../common/main'
import Layout from '../containers/Layout/Layout'
import Content from '../modules/home'
import reducer from '../modules/home/reducer'

// import { red } from '@material-ui/core/colors';
// import _ from 'lodash'

@main({
  Layout: Layout,
  reducers: {
    home: reducer
  },
  translationNameSpaces: ['home'],
  routeName: 'home'
})
export default class HomePage extends Component {
  static async getInitialProps() {
    return {}
  }
  render() {
    return <Content {...this.props} />
  }
}
