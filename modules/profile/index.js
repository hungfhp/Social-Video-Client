import React, { Component } from 'react'
import Head from 'next/head'
import './styles.scss'
import { connect } from 'react-redux'

// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
// import Fade from '@material-ui/core/Fade'
// import FavoriteIcon from '@material-ui/icons/Favorite'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Grid from '@material-ui/core/Grid'
import Loading from '../../components/Loading'
import GroupIcon from '@material-ui/icons/Group'
// import HistoryIcon from '@material-ui/icons/History'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
// import SettingsIcon from '@material-ui/icons/Settings'
import CastConnectedIcon from '@material-ui/icons/CastConnected'
import SwipeableViews from 'react-swipeable-views'
// import Typography from '@material-ui/core/Typography'

import SectionMovies from '../../containers/Movie/SectionMovies'
import Friends from './components/Friends'
// import Favorites from './components/Favorites'
import Follows from './components/Follows'
// import Likes from './components/Likes'
// import History from './components/History'
import Settings from './components/Settings'
import ViewUserProfile from './components/ViewUserProfile'

import {
  getMoviesLiked,
  getMoviesFollowed,
  getProfile,
  getRequesters,
  getFriends,
  getFollowers,
  getFollowing
} from './action'

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
    requesters: state.profile.requesters,
    friends: state.profile.friends,
    followers: state.profile.followers,
    following: state.profile.following
  }),
  {
    getMoviesLiked,
    getMoviesFollowed,
    getProfile,
    getRequesters,
    getFriends,
    getFollowers,
    getFollowing
  }
)
@withStyles(styles, { withTheme: true })
export default class extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.setState({ value: 0 })
      this.getInitData(nextProps.userId)
    }
  }
  getInitData = userId => {
    this.props.getMoviesLiked(null, userId)
    this.props.getMoviesFollowed(null, userId)
    this.props.getRequesters(userId)
    this.props.getFriends(userId)
    this.props.getFollowers(userId)
    this.props.getFollowing(userId)
    this.props.getProfile(null, userId)
  }
  componentDidMount() {
    this.getInitData(this.props.userId)
  }

  render() {
    const { classes, theme, profile, user } = this.props
    const { value } = this.state
    const isOwn = profile.data._id === user._id
    // console.log(this.props.moviesLiked.data)
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
                  isOwn ? (
                    <Settings profile={this.props.profile.data} />
                  ) : (
                    <ViewUserProfile profile={this.props.profile.data} />
                  )
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
                  <BottomNavigationAction label="Tải lên" icon={<VideoLibraryIcon />} />
                  <BottomNavigationAction label="Bạn bè" icon={<GroupIcon />} />
                  <BottomNavigationAction label="Theo dõi" icon={<Subscriptions />} />
                  <BottomNavigationAction label="Xem sau" icon={<CastConnectedIcon />} />
                  <BottomNavigationAction label="Đã thích" icon={<ThumbUpAltIcon />} />

                  {/* <BottomNavigationAction label="Settings" icon={<SettingsIcon />} /> */}
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
                    {this.props.requesters.loaded && this.props.friends.loaded ? (
                      <Friends requesters={this.props.requesters} friends={this.props.friends} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper>
                  <Paper elevation={0} className={classes.paper}>
                    {this.props.followers.loaded && this.props.following.loaded ? (
                      <Follows followers={this.props.followers} following={this.props.following} />
                    ) : (
                      <Loading loading={true} />
                    )}
                  </Paper>
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
