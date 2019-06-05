import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '../../../components/Link'
import MoviePlayer from '../../../components/Movie/MoviePlayer'
import Typography from '@material-ui/core/Typography'
// import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { getImageMovie, getMovieViewsCount } from '../../../common/utils/helpers'
import PropTypes from 'prop-types'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Favorite from '@material-ui/icons/Favorite'
import PlaylistAdd from '@material-ui/icons/PlaylistAdd'
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
// import GridListTileBar from '@material-ui/core/GridListTileBar'
// import ListSubheader from '@material-ui/core/ListSubheader'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import { createFollowUser, deleteFollowUser, getFollowedUser } from '../../profile/action'
import { createLike, deleteLike, createFollow, deleteFollow } from '../action'
import ButtonFollow from '../../../components/User/ButtonFollow'
import fetchApi from '../../../common/utils/fetchApi'

const styles = theme => ({
  moviePlayer: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  avatar: {
    width: 60,
    height: 60
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  title: {
    marginTop: 10
    // borderTop: '1px solid grey'
  },
  photoWraper: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: '100%',
    maxHeight: 500
  },
  playButton: {
    marginRight: 20
  },
  iconLike: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: -5,
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  iconLiked: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: -5,
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light
    }
  },
  iconFavorite: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: -5,
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  iconFavorited: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.primary.main,
    marginBottom: -5,
    '&:hover': {
      color: theme.palette.primary.light
    }
  },
  iconFollow: {
    marginRight: theme.spacing.unit * 2
  },
  iconFollowed: {
    marginRight: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: theme.palette.default
    }
  }
})

@connect(
  state => ({
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    movie: state.movie,
    suggestMovies: state.common.suggestMovies
  }),
  {
    createFollowUser,
    deleteFollowUser,
    getFollowedUser,
    createLike,
    deleteLike,
    createFollow,
    deleteFollow
  }
)
@withStyles(styles, { withTheme: true })
export default class MovieInfo extends Component {
  state = {
    like: 0,
    follow: 0
  }
  handlePlay = () => {
    this.setState({ play: true })
  }
  handleLike = async () => {
    this.setState({ like: 1 })
    this.props.createLike(this.props.movie._id)
  }
  handleUnLike = async () => {
    this.setState({ like: 0 })
    this.props.deleteLike(this.props.movie.liked._id)
  }
  handleFollow = async () => {
    this.setState({ follow: 1 })
    this.props.createFollow(this.props.movie._id)
  }
  handleUnFollow = async () => {
    this.setState({ follow: 0 })
    this.props.deleteFollow(this.props.movie.followed._id)
  }
  handleDeleteMovie = async () => {
    fetchApi(`/movies/${this.props.movie._id}`, { method: 'DELETE' }).then(res => {
      // document.location.href = '/profile/me'
      console.log(res)
    })
  }
  render() {
    const { classes, theme, movie, user } = this.props
    const { uploader = {} } = movie
    // console.log(movie)
    return (
      <React.Fragment>
        <Grid container spacing={theme.spacing.unit * 5}>
          <div className={classes.moviePlayer}>
            <MoviePlayer movie={movie} />
          </div>
          <Grid item container xs={12}>
            <Grid container spacing={theme.spacing.unit * 3}>
              <Grid item xs={9}>
                <Typography variant="h4">{movie.name}</Typography>
                <Typography variant="h5" color="textSecondary">
                  {movie.nameOrigin && movie.nameOrigin + ' ・'}
                  {movie.year}
                </Typography>
                {uploader._id === user._id && (
                  <Link href={`/movie/edit/${movie._id}`} style={{ marginRight: 20 }}>
                    <Button color="secondary" variant="outlined">
                      Chỉnh sửa
                    </Button>
                  </Link>
                )}
                {('admin' === user.role || uploader._id === user._id) && (
                  <Button color="secondary" variant="outlined" onClick={this.handleDeleteMovie}>
                    Xóa
                  </Button>
                )}
              </Grid>
              <Grid item xs={3}>
                <Typography align="right" variant="h6" color="textSecondary">
                  {getMovieViewsCount(movie)} lượt xem
                  <br />
                  {movie.liked._id ? (
                    <ThumbUpAlt
                      onClick={this.handleUnLike}
                      className={classes.iconLiked + ' clickable'}
                    />
                  ) : (
                    <ThumbUpAlt
                      onClick={this.handleLike}
                      className={classes.iconLike + ' clickable'}
                    />
                  )}
                  {/* {movie.likesCount + this.state.like} */}
                  {movie.followed._id ? (
                    <PlaylistAddCheck
                      onClick={this.handleUnFollow}
                      className={classes.iconFavorited + ' clickable'}
                    />
                  ) : (
                    <PlaylistAdd
                      onClick={this.handleFollow}
                      className={classes.iconFavorite + ' clickable'}
                    />
                  )}
                  {/* {movie.favoritesCount + this.state.follow || 0} */}
                </Typography>
              </Grid>
            </Grid>

            <Grid item container className={classes.title} xs={12}>
              <Grid item xs={1}>
                <Avatar alt="Remy Sharp" src={uploader.avatarUrl} className={classes.avatar} />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6">
                  <Link href={`/profile/${uploader._id}`}>{uploader.name}</Link>
                </Typography>
                <Typography variant="h6" style={{ paddingTop: 10 }} color="textSecondary">
                  <br />
                  <Typography color="textSecondary" inline>
                    Trạng thái:{' '}
                  </Typography>
                  <Typography color="secondary" inline>
                    {String(movie.status).toUpperCase()}
                  </Typography>
                  <Typography color="textSecondary">
                    Quốc gia:{' '}
                    {(movie.countries && movie.countries.length && movie.countries.join(', ')) ||
                      '...'}
                  </Typography>
                  <Typography color="textSecondary">
                    Đạo diễn:{' '}
                    {(movie.directors && movie.directors.length && movie.directors.join(', ')) ||
                      '...'}
                  </Typography>
                  <Typography color="textSecondary">
                    Thể loại:{' '}
                    {(movie.genres && movie.genres.length && movie.genres.join(', ')) || '...'}
                  </Typography>
                </Typography>
                <Grid item className={classes.content} xs={12}>
                  <Typography color="textSecondary">Nội dung phim:</Typography>
                  <Typography variant="body1">{movie.desc}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <div className={classes.photoWraper}>
                    <GridList cellHeight={250} className={classes.gridList}>
                      {movie.photos &&
                        movie.photos.length &&
                        movie.photos.map(photoUrl => (
                          <GridListTile key={photoUrl}>
                            <img src={photoUrl} alt={'sdfsdf'} />
                          </GridListTile>
                        ))}
                    </GridList>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <ButtonFollow user={uploader} hasIcon={true} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div
              className="fb-comments"
              datahref={`https://developers.facebook.com/docs/plugins/comments#${movie._id}`}
              datawidth="100%"
              datanumposts="10"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired
}
