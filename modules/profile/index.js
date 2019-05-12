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

import SectionMovies from '../../containers/Movie/SectionMovies'
import Groups from './components/Groups'
import Favorites from './components/Favorites'
import Follows from './components/Follows'
import Likes from './components/Likes'
import History from './components/History'
import Settings from './components/Settings'

import { getMoviesLiked, getMoviesFollowed, getGroupsOwn, getProfile } from './action'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 3
  }
})

@connect(
  state => ({
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    profile: state.profile.profile,
    moviesOwn: state.profile.moviesOwn,
    moviesLiked: state.profile.moviesLiked,
    moviesFollowed: state.profile.moviesFollowed,
    groupsOwn: state.profile.groupsOwn
  }),
  { getMoviesLiked, getMoviesFollowed, getGroupsOwn, getProfile }
)
@withStyles(styles, { withTheme: true })
export default class extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }
  componentDidMount() {
    // this.props.getMoviesLiked(null, this.props.userId)
    // this.props.getMoviesFollowed(null, this.props.userId)
    // this.props.getGroupsOwn(null, this.props.userId)
    this.props.getProfile(null, this.props.userId)
  }

  render() {
    const { classes, theme } = this.props
    const { value } = this.state
    // console.log(this.props.profile)
    return (
      <React.Fragment>
        <Head>
          <title>Profile</title>
          <meta name="description" content="Home page" />
        </Head>
        <div id="profile" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            <Grid item md={3}>
              <Paper elevation={0} className={classes.paper}>
                {this.props.profile.loaded ? (
                  <Settings profile={this.props.profile.data} />
                ) : (
                  <Loading loading={true} />
                )}
              </Paper>
            </Grid>
            <Grid item container md={9}>
              <Grid item md={12}>
                <BottomNavigation
                  value={value}
                  onChange={this.handleChange}
                  showLabels
                  className={classes.root}
                >
                  {/* <BottomNavigationAction label="Settings" icon={<SettingsIcon />} /> */}
                  <BottomNavigationAction label="Movies" icon={<VideoLibraryIcon />} />
                  <BottomNavigationAction label="Groups" icon={<GroupIcon />} />
                  {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
                  <BottomNavigationAction label="Follows" icon={<CastConnectedIcon />} />
                  <BottomNavigationAction label="Likes" icon={<ThumbUpAltIcon />} />
                  {/* <BottomNavigationAction label="History" icon={<HistoryIcon />} /> */}
                </BottomNavigation>

                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={this.state.value}
                  onChangeIndex={this.handleChangeIndex}
                >
                  {/* <Paper elevation={0} className={classes.paper}>
                    {this.props.profile.loaded ? (
                      <Settings profile={this.props.profile.data} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper> */}
                  <Paper elevation={0} className={classes.paper}>
                    {this.props.moviesOwn.loaded ? (
                      <SectionMovies movies={this.props.moviesOwn} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper>
                  <Paper elevation={0} className={classes.paper}>
                    {this.props.groupsOwn.loaded ? (
                      <Groups movies={this.props.groupsOwn} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper>
                  {/* <Paper elevation={0} className={classes.paper}>
                  <Loading loading={!this.props.moviesOwn.loaded}/>
                  <Favorites />
                </Paper> */}
                  <Paper elevation={0} className={classes.paper}>
                    {this.props.moviesFollowed.loaded ? (
                      <SectionMovies movies={this.props.moviesFollowed} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper>
                  <Paper elevation={0} className={classes.paper}>
                    {this.props.moviesLiked.loaded ? (
                      <SectionMovies movies={this.props.moviesLiked} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper>
                  {/* <Paper elevation={0} className={classes.paper}>
                  <History />
                </Paper> */}
                </SwipeableViews>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
