import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { createFollowUser, deleteFollowUser, getFollowedUser } from '../../modules/profile/action'
import { connect } from 'react-redux'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  button: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
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
  { createFollowUser, deleteFollowUser, getFollowedUser }
)
@withStyles(styles, { withTheme: true })
export default class ButtonFollow extends Component {
  state = {
    followedUser: {},
    loaded: false
  }

  getFollowedUser = async targetId => {
    const { authenUser = {} } = this.props
    const followedUser = await this.props.getFollowedUser(authenUser._id, targetId)
    this.setState({ followedUser })
    this.setState({ loaded: true })
  }
  handleFollowUser = async () => {
    const { user = {} } = this.props
    await this.props.createFollowUser(user._id)
    this.getFollowedUser(user._id)
  }
  handleDeleteFollowUser = async () => {
    await this.props.deleteFollowUser(this.state.followedUser._id)
    this.setState({ followedUser: {} })
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.state.followedUser.follow !== nextProps.user._id) {
      this.getFollowedUser(nextProps.user._id)
    }
  }
  componentDidMount() {
    const { user = {} } = this.props
    this.getFollowedUser(user._id)
  }
  render() {
    const { classes, hasIcon = false, size = 'large' } = this.props

    if (!this.state.loaded) {
      return (
        <Button color="primary" variant="outlined" size={size} fullWidth disabled>
          <Typography variant="inherit" noWrap>
            ...
          </Typography>
        </Button>
      )
    } else if (this.state.followedUser._id) {
      return (
        <Button
          color="primary"
          variant="outlined"
          size={size}
          fullWidth
          onClick={this.handleDeleteFollowUser}
          className={classes.button}
        >
          {hasIcon && <Subscriptions className={classes.iconFollowed + ' clickable'} />}
          Đang theo dõi
        </Button>
      )
    } else {
      return (
        <Button
          color="primary"
          variant="outlined"
          size={size}
          fullWidth
          onClick={this.handleFollowUser}
          className={classes.button}
        >
          {hasIcon && <Subscriptions className={classes.iconFollow + ' clickable'} />}
          Theo dõi
        </Button>
      )
    }
  }
}

ButtonFollow.propTypes = {
  user: PropTypes.object.isRequired
}
