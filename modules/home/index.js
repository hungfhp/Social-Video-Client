import React, { Component } from 'react'
import Head from 'next/head'
import './styles.scss'
// import image from '~/assets/img/bg7.jpg'
import Button from '@material-ui/core/Button'
// import AppBar from '@material-ui/core/AppBar';

// eslint-disable-next-line react/display-name
export default class extends Component {
  render() {
    return (
      <div id="home">
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page" />
        </Head>
        <div>
          <h1>hihihihih</h1>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <br />
          <br />
          <Button variant="contained" color="secondary">
            Hello World
          </Button>
          <br />
          <br />
          <Button variant="contained" color="default">
            Hello World
          </Button>
          <br />
          <br />
        </div>
      </div>
    )
  }
}
