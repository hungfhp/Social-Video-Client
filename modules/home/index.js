import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SectionMovies from '../../containers/Movie/SectionMovies'
import SectionUserMovies from '../../containers/User/SectionUserMovies'
import RightSideMovies from '../../containers/Movie/RightSideMovies'
import Loading from '../../components/Loading'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  sideRigthListMovies: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.primary
  }
})

@connect(
  state => ({
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    suggestMovies: state.home.suggestMovies,
    newMovies: state.home.newMovies,
    recommendMovies: state.home.recommendMovies,
    suggestUsers: state.home.suggestUsers,
    watchLaterMovies: state.profile.moviesFollowed,
    following: state.profile.following
  }),
  {}
)
@withStyles(styles, { withTheme: true })
export default class Home extends Component {
  state = {}

  componentDidMount() {}
  renderFollowing = () => {
    const { following } = this.props

    if (following.loaded && following.data.length) {
      return (
        <React.Fragment>
          {following.data.slice(0, 5).map(user => {
            return <SectionUserMovies user={user} />
          })}
        </React.Fragment>
      )
    } else {
      return <Loading loading={true} />
    }
  }
  render() {
    const {
      isAuthenticated,
      classes,
      theme,
      suggestMovies,
      newMovies,
      recommendMovies,
      suggestUsers,
      watchLaterMovies,
      following
    } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Trang chủ</title>
          <meta name="description" content="Home page" />
        </Head>
        <div id="home" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            <Grid item md={9}>
              {isAuthenticated && (
                <SectionMovies movies={recommendMovies} title={'Phim phù hợp cho bạn'} />
              )}
              <SectionMovies movies={suggestMovies} title={'Phim nổi bật'} />
              {isAuthenticated && <SectionMovies movies={watchLaterMovies} title={'Xem sau'} />}

              {following.loaded &&
                following.data.length &&
                following.data.slice(0, 5).map(user => {
                  return <SectionUserMovies key={user._id} user={user} />
                })}

              {suggestUsers.data.length
                ? suggestUsers.data.map(user => {
                    return <SectionUserMovies key={user._id} user={user} />
                  })
                : null}
            </Grid>

            <Grid item md={3}>
              <Loading loading={!newMovies.loaded} />
              {newMovies.loaded && (
                <RightSideMovies className={classes.sideRigthListMovies} movies={newMovies} />
              )}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
