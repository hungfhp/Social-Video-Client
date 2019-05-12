import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { getImageMovie, getMovieViewsCount } from '../../common/utils/helpers'
import Link from '../../components/Link'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  cover: {
    width: 80,
    height: 104
  }
})

class MovieCardSm extends Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, theme, movie } = this.props
    return (
      <Paper elevation={1}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={theme.spacing.unit}
        >
          <Grid item sx={3}>
            <CardMedia
              className={classes.cover}
              image={getImageMovie(movie, 'small')}
              title={movie.name}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">
              <Link href={`/movie/${movie._id}`} color="textPrimary">
                {movie.name}
              </Link>
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {(movie.genres && movie.genres.length && movie.genres.join(', ')) || '...'}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {getMovieViewsCount(movie)} lượt xem
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

MovieCardSm.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MovieCardSm)
