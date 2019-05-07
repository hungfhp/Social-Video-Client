import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '../../../components/Link'
import MoviePlayer from '../../../components/Movie/MoviePlayer'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { getImageMovie } from '../../../common/utils/helpers'
import PropTypes from 'prop-types'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

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
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  }
})

@withStyles(styles, { withTheme: true })
export default class MovieInfo extends Component {
  render() {
    const { classes, theme, movie } = this.props
    return (
      <React.Fragment>
        <MoviePlayer movie={movie} />
        <Grid container spacing={theme.spacing.unit * 2}>
          <Grid item md={7}>
            <CardMedia
              className={classes.media + ' clickable'}
              image={getImageMovie(movie, 'large')}
              src="img"
              title={movie.name}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            md={5}
          >
            <Grid item>
              <Typography component="h5" variant="h5">
                {movie.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {movie.nameOrigin && movie.nameOrigin + ' ・'}
                {movie.year}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textSecondary">
                Status: {movie.status}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Country:{' '}
                {(movie.countries && movie.countries.length && movie.countries.join(', ')) || '...'}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Directors:{' '}
                {(movie.directors && movie.directors.length && movie.directors.join(', ')) || '...'}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Genres: {(movie.genres && movie.genres.length && movie.genres.join(', ')) || '...'}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Duration: {movie.duration || '...'}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Views: {movie.viewsCount + 343}
              </Typography>
            </Grid>
            <Grid item className={classes.controls}>
              <Button variant="outlined" size="large" color="primary" className={classes.button}>
                Play Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired
}
