import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '../../components/Link'
import Loading from '../../components/Loading'
import Paper from '@material-ui/core/Paper'
import Remove from '@material-ui/icons/Remove'
import {
  createRequest,
  acceptRequest,
  rejectRequest,
  removeFriend
} from '../../modules/profile/action'
import { connect } from 'react-redux'
import Subscriptions from '@material-ui/icons/Subscriptions'
import fetchApi from '../../common/utils/fetchApi'

const styles = theme => ({
  iconFollow: {
    marginRight: theme.spacing.unit * 2
  },
  iconFollowed: {
    marginRight: theme.spacing.unit * 2
  }
})

@connect(
  state => ({
    authenUser: state.common.user,
    isAuthenticated: state.common.isAuthenticated
  }),
  { createRequest, acceptRequest, rejectRequest, removeFriend }
)
@withStyles(styles, { withTheme: true })
export default class ButtonFriend extends Component {
  state = {
    status: {},
    loaded: false
  }
  createRequest = async () => {
    const { user = {} } = this.props
    await this.props.createRequest(user._id)
    this.setState({ status: { isRequested: true } })
  }
  acceptRequest = async () => {
    const { user = {} } = this.props
    await this.props.acceptRequest(user._id)
    this.setState({ status: { isFriend: true } })
  }
  rejectRequest = async () => {
    const { user = {} } = this.props
    await this.props.rejectRequest(user._id)
    this.setState({ status: {} })
  }
  removeFriend = async () => {
    const { user = {} } = this.props
    await this.props.removeFriend(user._id)
    this.setState({ status: {} })
  }
  getRelationshipStatus = async () => {
    let { user = {} } = this.props
    const res = await fetchApi(`/relationships/check/${user._id}`)

    const status = (res.data && res.data.data) || {}
    this.setState({ status })
    this.setState({ loaded: true })
  }
  componentDidMount() {
    this.getRelationshipStatus()
  }
  render() {
    const { classes, theme, user, hasIcon = false, size = 'large' } = this.props
    const { loaded, status = {} } = this.state

    if (!loaded) {
      return (
        <Button color="primary" variant="outlined" size={size} fullWidth disabled>
          <Typography variant="inherit" noWrap>
            ...
          </Typography>
        </Button>
      )
    } else if (status.isRequested) {
      return (
        <Button color="primary" variant="outlined" size={size} fullWidth disabled>
          <Typography variant="inherit" noWrap>
            Đã gửi yêu cầu kết bạn
          </Typography>
        </Button>
      )
    } else if (status.isRequester) {
      return (
        <Grid container spacing={8}>
          <Grid item md={6}>
            <Button
              color="primary"
              variant="outlined"
              size={size}
              fullWidth
              onClick={this.acceptRequest}
            >
              <Typography variant="inherit" noWrap>
                Chấp nhận
              </Typography>
            </Button>
          </Grid>
          <Grid item md={6}>
            <Button
              color="primary"
              variant="outlined"
              size={size}
              fullWidth
              onClick={this.rejectRequest}
            >
              <Typography variant="inherit" noWrap>
                Từ chối
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )
    } else if (status.isFriend) {
      return (
        <Grid container spacing={8}>
          <Grid item md={9}>
            <Button color="primary" variant="outlined" size={size} fullWidth>
              <Typography variant="inherit" noWrap>
                Bạn bè
              </Typography>
            </Button>
          </Grid>
          <Grid item md={3}>
            <Button
              color="secondary"
              variant="outlined"
              size={size}
              fullWidth
              onClick={this.removeFriend}
            >
              X
            </Button>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Button
          color="primary"
          variant="outlined"
          size={size}
          fullWidth
          onClick={this.createRequest}
        >
          {hasIcon && <Subscriptions className={classes.iconFollowed + ' clickable'} />}
          Kết bạn
        </Button>
      )
    }
  }
}

ButtonFriend.propTypes = {
  user: PropTypes.object.isRequired
}
