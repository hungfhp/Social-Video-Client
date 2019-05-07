import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

@withStyles(styles, { withTheme: true })
export default class Favorites extends Component {
  render() {
    return <React.Fragment>Favorites</React.Fragment>
  }
}
