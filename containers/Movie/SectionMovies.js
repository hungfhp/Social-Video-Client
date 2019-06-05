import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCard from '../../components/Movie/MovieCard'
import Link from '../../components/Link'
import Typography from '@material-ui/core/Typography'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'

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
export default class SectionMovies extends Component {
  handlePagination = params => {
    this.props.handlePagination(params)
  }
  render() {
    const { classes, theme, title, movies = {}, hasPagination } = this.props

    if (movies.loaded == undefined) {
      return null
    }
    if (!movies.loaded) {
      return <Loading loading={true} />
    }
    return (
      <React.Fragment>
        {title && (
          <Typography variant="h6" color="textPrimary" style={theme.title.section}>
            {title}
          </Typography>
        )}
        <Grid container spacing={theme.spacing.unit * 2}>
          {movies.data && movies.data.length
            ? movies.data.map((movie, index) => {
                if (movie) {
                  return (
                    <Grid key={index} item md={3}>
                      <MovieCard movie={movie._id ? movie : {}} />
                    </Grid>
                  )
                }
              })
            : null}
        </Grid>
        <br />
        <hr />
        {hasPagination && (
          <Pagination pagination={movies.pagination} handlePagination={this.handlePagination} />
        )}
        <br />
        <br />
      </React.Fragment>
    )
  }
}
