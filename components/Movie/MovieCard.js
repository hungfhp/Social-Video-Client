import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
// import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import CardActionArea from '@material-ui/core/CardActionArea'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import Typography from '@material-ui/core/Typography'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import ShareIcon from '@material-ui/icons/Share'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
import { getImageMovie, getMovieViewsCount } from '../../common/utils/helpers'
import Link from '../../components/Link'
import moment from 'moment'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import { pushRoute } from '../Link'
import { updateUrlParameter } from '../../common/utils/url'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  wrapperImage: {
    position: 'relative',
    '&:hover': {
      backgroundColor: 'red'
    }
  },
  iconPlay: {
    position: 'absolute',
    visibility: 'hidden',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    color: theme.palette.primary.main,
    transform: 'translate(-50%, -50%)'
  },
  cardActions: {
    padding: '0px 4px 8px',
    display: 'block'
  },
  titleMovie: {
    fontWeight: 500
  },
  uploader: {
    fontWeight: 500
  },
  cardContent: {
    padding: '8px !important'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  moreVertIcon: {
    padding: 5
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  inline: {
    display: 'inline'
  }
})

@withStyles(styles, { withTheme: true })
export default class MovieCard extends Component {
  state = { expanded: false }

  handleOpenMovie = () => {
    pushRoute(updateUrlParameter(`/movie/${this.props.movie._id}`))
  }

  render() {
    const { classes, theme, movie } = this.props
    const uploader = movie.uploader || {}
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.handleOpenMovie}>
          <div className={classes.wrapperImage}>
            <div>
              <CardMedia
                className={classes.media + ' clickable'}
                image={getImageMovie(movie)}
                title={movie.name}
              />
            </div>
            <PlayCircleOutline className={classes.iconPlay} />
          </div>
          <CardContent className={classes.cardContent}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignContent="space-between"
              alignItems="flex-start"
              spacing={theme.spacing.unit}
            >
              <Grid item xs>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  style={theme.text.wrapTwoLine}
                  className={classes.titleMovie}
                >
                  <Link variant="inherit" href={`/movie/${movie._id}`} color="textPrimary">
                    {movie.name}
                    <br />
                    <Typography component="span" color="textPrimary">
                      {movie.nameOrigin}
                    </Typography>
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs />
              {/* <Grid item xs> */}
              {/* <Typography variant="caption" color="textPrimary"> */}
              {/* Link */}
              {/* </Typography> */}
              {/* </Grid> */}
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Typography className={classes.uploader} component="div">
            <Link variant="caption" href={`/profile/${uploader._id}`} color="textPrimary">
              {uploader.name}
            </Link>
          </Typography>

          <Typography inline={true} variant="caption" color="textPrimary" component="div">
            {getMovieViewsCount(movie)} lượt xem・{moment(movie.createdAt).fromNow()}
          </Typography>
        </CardActions>
      </Card>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}
