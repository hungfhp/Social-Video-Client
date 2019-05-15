import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '../../../components/Link'
import MoviePlayer from '../../../components/Movie/MoviePlayer'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { getImageMovie, getMovieViewsCount } from '../../../common/utils/helpers'
import PropTypes from 'prop-types'

const styles = theme => ({
  moviePlayer: {
    marginTop: theme.spacing.unit * 3
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  playButton: {
    marginRight: 20
  }
})

@withStyles(styles, { withTheme: true })
export default class MovieInfo extends Component {
  state = {
    play: false
  }
  handlePlay = () => {
    this.setState({ play: true })
  }
  UNSAFE_componentWillReceiveProps() {
    this.setState({ play: false })
  }
  render() {
    const { classes, theme, movie } = this.props
    const { play } = this.state
    console.log(movie)
    return (
      <React.Fragment>
        <Grid container spacing={theme.spacing.unit * 5}>
          <Grid item md={7}>
            <CardMedia
              className={classes.media + ' clickable'}
              image={getImageMovie(movie, 'large')}
              src={getImageMovie(movie, 'large')}
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
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
              spacing={theme.spacing.unit * 3}
            >
              <Grid item>
                <Typography variant="h4">{movie.name}</Typography>
                <Typography variant="h5" color="textSecondary">
                  {movie.nameOrigin && movie.nameOrigin + ' ・'}
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary" inline>
                  Trạng thái:{' '}
                </Typography>
                <Typography variant="h6" color="secondary" inline>
                  {String(movie.status).toUpperCase()}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Quốc gia:{' '}
                  {(movie.countries && movie.countries.length && movie.countries.join(', ')) ||
                    '...'}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Đạo diễn:{' '}
                  {(movie.directors && movie.directors.length && movie.directors.join(', ')) ||
                    '...'}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Thể loại:{' '}
                  {(movie.genres && movie.genres.length && movie.genres.join(', ')) || '...'}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Thời lượng: {movie.duration || '...'}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Tải lên:{' '}
                  <Link href={`/profile/${(movie.uploader && movie.uploader.id) || '...'}`}>
                    {(movie.uploader && movie.uploader.name) || '...'}
                  </Link>
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  Lượt xem: {getMovieViewsCount(movie)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.controls}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className={classes.playButton}
                onClick={this.handlePlay}
              >
                {play ? 'Playing' : 'Play Now'}
              </Button>
              <Button color="primary" variant="outlined" size="large">
                Thêm phụ đề mới
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {play && (
          <div className={classes.moviePlayer}>
            <MoviePlayer movie={movie} play={true} />
          </div>
        )}
      </React.Fragment>
    )
  }
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired
}
