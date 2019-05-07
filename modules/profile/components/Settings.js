import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

@withStyles(styles, { withTheme: true })
export default class Settings extends Component {
  render() {
    return <React.Fragment>Settings</React.Fragment>
  }
}
