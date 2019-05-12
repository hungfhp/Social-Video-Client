import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SectionMovies from '../../containers/Movie/SectionMovies'
import RightSideMovies from '../../containers/Movie/RightSideMovies'
import Loading from '../../components/Loading'

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
    newMovies: state.home.newMovies
  }),
  {}
)
@withStyles(styles, { withTheme: true })
export default class Home extends Component {
  state = {}
  render() {
    const { classes, theme, suggestMovies, newMovies } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page" />
        </Head>
        <div id="home" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            <Grid item md={9}>
              <Loading loading={!suggestMovies.loaded} />
              {suggestMovies.loaded && <SectionMovies movies={suggestMovies} />}
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
