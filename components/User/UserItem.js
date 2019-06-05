import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Link from '../../components/Link'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  cover: {
    width: 20,
    height: 20
  }
})

class UserItem extends Component {
  state = { expanded: false }

  render() {
    const { classes, theme, user } = this.props
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
            <CardMedia className={classes.cover} image={user.avatarUrl} title={user.name} />
          </Grid>
          <Grid
            item
            xs={9}
            sm
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            spacing={8}
          >
            <Grid item>
              <Typography variant="subtitle2">
                <Link
                  href={`/profile/${user._id}`}
                  color="textPrimary"
                  style={theme.text.wrapTwoLine}
                >
                  {user.name}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                10 phim
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

UserItem.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(UserItem)
