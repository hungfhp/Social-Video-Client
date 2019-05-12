import React, { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import './styles.scss'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieInfo from './components/MovieInfo'
import MovieCreate from './components/MovieCreate'
import MovieEdit from './components/MovieEdit'
import RightSideMovies from '../../containers/Movie/RightSideMovies'
import Loading from '../../components/Loading'

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

const getPage = ({ query, ...props }) => {
  switch (query && query.action) {
    case 'create':
      return {
        title: 'Tải lên phim mới',
        description:
          "Read our story in the Japanese car industry from our start. Understand more about our founders' ambition, vision and mission in invigorating the old industry",
        content: <MovieCreate />
      }
    case 'edit':
      console.log('object')
      return {
        title: 'Edit: ' + props.movie.title,
        description:
          'Explore who we are, why we do this business, what we can bring to you, how you can enjoy our service and which sections we are specialized in',
        content: <MovieEdit movie={props.movie} />
      }
    default:
      // view
      return {
        title: props.movie.title,
        description:
          'Explore who we are, why we do this business, what we can bring to you, how you can enjoy our service and which sections we are specialized in',
        content: <MovieInfo movie={props.movie} />
      }
  }
}
@connect(
  state => ({
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    movie: state.movie,
    suggestMovies: state.common.suggestMovies
  }),
  {
    // getSuggestMovies
  }
)
@withStyles(styles, { withTheme: true })
export default class Movie extends Component {
  state = {}
  render() {
    const { classes, theme, movie, suggestMovies } = this.props
    const page = getPage(this.props)
    return (
      <React.Fragment>
        <Head>
          <title>{page.title}</title>
          <meta name="description" content={page.description} />
        </Head>
        <div id="home" className={classes.root}>
          <Grid container spacing={theme.spacing.unit * 5} alignContent="space-between">
            {/* <Loading loading={!movie.loaded} /> */}
            <Grid item md={9}>
              {page.content}
            </Grid>

            <Grid item md={3}>
              <Loading loading={!suggestMovies.loaded} />
              {suggestMovies.loaded && (
                <RightSideMovies className={classes.sideRigthListMovies} movies={suggestMovies} />
              )}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}
