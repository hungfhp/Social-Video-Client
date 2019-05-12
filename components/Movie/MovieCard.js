import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { getImageMovie, getMovieViewsCount } from '../../common/utils/helpers'
import Link from '../../components/Link'
import moment from 'moment'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.unit * 2
  },
  cardContent: {
    paddingBottom: '0'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  moreVertIcon: {
    padding: '5px'
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

class MovieCard extends Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, theme, movie } = this.props
    const uploader = movie.uploader || {}
    return (
      <Card className={classes.card}>
        {/* <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        /> */}
        <CardMedia
          className={classes.media + ' clickable'}
          image={getImageMovie(movie)}
          title={movie.name}
        />
        <CardContent className={classes.cardContent}>
          <div>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignContent="space-between"
              alignItems="flex-start"
              spacing={theme.spacing.unit}
            >
              <Grid item xs>
                <Typography noWrap>
                  <Link variant="subtitle1" href={`/movie/${movie._id}`} color="textPrimary">
                    {movie.name}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography>
                  <Link variant="caption" href={`/profile/${uploader._id}`} color="textPrimary">
                    {uploader.name}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="caption" color="textPrimary">
                  {/* Link */}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/* <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <Typography>
            <Typography inline={true} variant="caption" color="textPrimary">
              {getMovieViewsCount(movie)} lượt xem ・
            </Typography>
            <Typography inline={true} variant="caption" color="textPrimary">
              {moment(movie.createdAt).fromNow()}
            </Typography>
          </Typography>
          <IconButton
            className={classes.moreVertIcon}
            // onClick={this.handleExpandClick}
            // aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <MoreVertIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent />
        </Collapse>
      </Card>
    )
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(MovieCard)
