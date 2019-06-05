import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '../../components/Link'
import { connect } from 'react-redux'
import ButtonFollow from '../../components/User/ButtonFollow'

const styles = theme => ({
  cover: {
    width: 70,
    height: 70,
    borderStyle: 'solid',
    borderRadius: '50%',
    borderColor: theme.palette.primary.main,
    borderWidth: '1px'
  },
  iconFollow: {
    marginRight: theme.spacing.unit * 2
  },
  iconFollowed: {
    marginRight: theme.spacing.unit * 2    
  },
})

@connect(
  state => ({
    isAuthenticated: state.common.isAuthenticated
  }),
  {  }
)
class UserItemLarge extends Component {
  state = { 
  }

  render() {
    const { classes, theme, user } = this.props
    return (
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
              image={user.avatarUrl}
              title={user.name}
            />
          </Grid>
          <Grid
            item
            xs={7}
            sm
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            spacing={8}
          >
            <Grid item>
              <Typography variant="title">
                <Link
                  href={`/profile/${user._id}`}
                  color="textPrimary"
                  style={theme.text.wrapTwoLine}
                >
                  {user.name}
                </Link>
              </Typography>
            </Grid>
          </Grid>
          
          <Grid item sx={2}>
            <ButtonFollow user={user} />
          </Grid>
        </Grid>
    )
  }
}

UserItemLarge.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(UserItemLarge)
