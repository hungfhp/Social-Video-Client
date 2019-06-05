import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Link from '../../../components/Link'
// import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import ButtonFriend from '../../../components/User/ButtonFriend'

const styles = theme => ({
  avatar: {
    display: 'inline-block',
    marginBottom: -10
  }
})

@withStyles(styles, { withTheme: true })
export default class Friends extends Component {
  // handleAcceptRequest = (targetId) => {

  // }
  render() {
    const { requesters = {}, friends = {}, classes } = this.props
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Yêu cầu kết bạn ({this.props.requesters.data.length})
            </Typography>
            <Grid item xs={12} container>
              {this.props.requesters.data.length
                ? this.props.requesters.data.map(user => {
                    return (
                      <React.Fragment key={user._id}>
                        <Grid item xs={7} style={{ marginTop: 15 }}>
                          <Avatar alt={user.name} src={user.avatarUrl} className={classes.avatar} />
                          <Typography
                            inline
                            noWrap
                            component="div"
                            variant="body1"
                            style={{ marginLeft: 10 }}
                          >
                            <Link href={`/profile/${user._id}`}>{user.name}</Link>
                          </Typography>
                        </Grid>
                        <Grid item xs={5} style={{ marginTop: 15 }}>
                          <ButtonFriend size="small" user={user} />
                        </Grid>
                      </React.Fragment>
                    )
                  })
                : null}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Bạn bè ({this.props.friends.data.length})</Typography>
            <Grid item xs={12} container>
              {this.props.friends.data.length &&
                this.props.friends.data.map(user => {
                  return (
                    <Grid item xs={6} style={{ marginTop: 15 }} key={user._id}>
                      <Avatar alt={user.name} src={user.avatarUrl} className={classes.avatar} />
                      <Typography
                        inline
                        noWrap
                        component="div"
                        variant="body1"
                        style={{ marginLeft: 10 }}
                      >
                        <Link href={`/profile/${user._id}`}>{user.name}</Link>
                      </Typography>
                    </Grid>
                  )
                })}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
