import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from '../../../components/Movie/MovieCard'
import Link from '../../../components/Link'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {}
})

@withStyles(styles, { withTheme: true })
export default class SuggestMovies extends Component {
  render() {
    const { classes, theme, movies } = this.props
    return (
      <React.Fragment>
        <Grid container spacing={theme.spacing.unit * 2}>
          {movies.data &&
            movies.data.length &&
            movies.data.map((movie, index) => {
              return (
                <Grid key={index} item md={3}>
                  <MovieCard movie={movie} />
                </Grid>
              )
            })}
        </Grid>
      </React.Fragment>
    )
  }
}
