import React, { Component } from 'react'
import Head from 'next/head'
import './styles.scss'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Fade from '@material-ui/core/Fade'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from '@material-ui/core/Grid'
import Loading from '../../components/Loading'
import GroupIcon from '@material-ui/icons/Group'
import HistoryIcon from '@material-ui/icons/History'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SettingsIcon from '@material-ui/icons/Settings'
import CastConnectedIcon from '@material-ui/icons/CastConnected'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography'

import Movies from './components/Movies'
import Groups from './components/Groups'
import Favorites from './components/Favorites'
import Follows from './components/Follows'
import Likes from './components/Likes'
import History from './components/History'
import Settings from './components/Settings'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
})

@withStyles(styles, { withTheme: true })
export default class extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, theme } = this.props
    const { value } = this.state
    return (
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page" />
        </Head>
        <div id="profile" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            <Grid item md={12}>
              <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
              >
                <BottomNavigationAction label="Movies" icon={<VideoLibraryIcon />} />
                <BottomNavigationAction label="Groups" icon={<GroupIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Follows" icon={<CastConnectedIcon />} />
                <BottomNavigationAction label="Likes" icon={<ThumbUpAltIcon />} />
                {/* <BottomNavigationAction label="History" icon={<HistoryIcon />} /> */}
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
              </BottomNavigation>
            </Grid>
            <Grid item md={12}>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <Paper elevation={0} className={classes.paper}>
                  <Movies />
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                  <Groups />
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                  <Favorites />
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                  <Follows />
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                  <Likes />
                </Paper>
                {/* <Paper elevation={0} className={classes.paper}>
                  <History />
                </Paper> */}
                <Paper elevation={0} className={classes.paper}>
                  <Settings />
                </Paper>
              </SwipeableViews>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
