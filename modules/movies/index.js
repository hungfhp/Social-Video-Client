import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import './styles.scss'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import MovieList from './components/MovieList'
// import SuggestMovies from '../../containers/Movie/SuggestMovies'
// import AppBar from '@material-ui/core/AppBar';
import Loading from '../../components/Loading'
import { getMovies } from './action'
import RightSideMovies from '../../containers/Movie/RightSideMovies'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { Typography } from '@material-ui/core'
import SectionMovies from '../../containers/Movie/SectionMovies'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.primary
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
    movies: state.movies,
    suggestMovies: state.common.suggestMovies
  }),
  {
    getMovies
  }
)
@withStyles(styles, { withTheme: true })
export default class Movies extends Component {
  state = {}
  render() {
    const { classes, theme, movies, suggestMovies } = this.props
    console.log(movies.keyword)
    return (
      <React.Fragment>
        <Head>
          <title>Danh sách phim</title>
          <meta name="description" content="Movie page" />
        </Head>
        <div id="home" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            <Grid item md={9}>
              <Typography variant="h6" color="textPrimary" style={theme.title.section}>
                Danh sách phim{' '}
                <Typography variant="h6" inline color="primary">
                  {movies.keyword && `"${movies.keyword}"`}
                </Typography>
              </Typography>
              {movies.loaded ? (
                <SectionMovies
                  hasPagination={true}
                  handlePagination={params => this.props.getMovies(params)}
                  movies={movies}
                />
              ) : (
                <Loading loading={true} />
              )}
            </Grid>

            <Grid item md={3}>
              {suggestMovies.loaded ? (
                <RightSideMovies className={classes.sideRigthListMovies} movies={suggestMovies} />
              ) : (
                <Loading loading={true} />
              )}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
