import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import MovieCardSm from '../../components/Movie/MovieCardSm'
// import Link from '../../components/Link'
// import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {},
  itemMovie: {
    width: '100%'
  }
})

@withStyles(styles, { withTheme: true })
export default class NewMovies extends Component {
  render() {
    const { classes, theme, movies, className } = this.props
    return (
      <Paper elevation={0} className={className}>
        {movies.data &&
          movies.data.length &&
          movies.data.map((movie, index) => {
            return (
              <Grid
                key={index}
                container
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                spacing={theme.spacing.unit * 4}
              >
                <Grid item className={classes.itemMovie}>
                  <MovieCardSm movie={movie} />
                </Grid>
              </Grid>
            )
          })}
      </Paper>
    )
  }
}
