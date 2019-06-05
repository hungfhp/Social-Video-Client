import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
// import Typography from '@material-ui/core/Typography'
// import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import InboxIcon from '@material-ui/icons/MoveToInbox'
// import MailIcon from '@material-ui/icons/Whatshot'
import Whatshot from '@material-ui/icons/Whatshot'
import LocalMovies from '@material-ui/icons/LocalMovies'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Group from '@material-ui/icons/Group'
import History from '@material-ui/icons/History'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import VideoLibrary from '@material-ui/icons/VideoLibrary'

import { connect } from 'react-redux'
import { openLeftSideDrawer } from '../../common/action'
import Link from '../../components/Link'

const styles = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawer: {
    width: theme.drawers.left.width,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: theme.drawers.left.width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1
    }
  }
})

@connect(
  state => ({
    common: state,
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    openLeftSide: state.commonUIState.openLeftSide
  }),
  { openLeftSideDrawer }
)
class LeftSide extends Component {
  handleDrawerClose = () => {
    this.props.openLeftSideDrawer(false)
  }
  render() {
    const { classes, theme, openLeftSide, isAuthenticated } = this.props
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: openLeftSide,
          [classes.drawerClose]: !openLeftSide
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: openLeftSide,
            [classes.drawerClose]: !openLeftSide
          })
        }}
        open={true}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button key={1}>
              <ListItemIcon>
                <Whatshot />
              </ListItemIcon>
              <ListItemText primary={'Xu hướng'} />
            </ListItem>
          </Link>

          <Link href="/movies">
            <ListItem button key={2}>
              <ListItemIcon>
                <LocalMovies />
              </ListItemIcon>
              <ListItemText primary={'Tất cả'} />
            </ListItem>
          </Link>
          <Divider />

          {isAuthenticated && (
            <List>
              <Link href="/profile/me">
                <ListItem button key={21}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText primary={'Cá nhân'} />
                </ListItem>
              </Link>

              <Link href="/profile/me">
                <ListItem button key={3}>
                  <ListItemIcon>
                    <Subscriptions />
                  </ListItemIcon>
                  <ListItemText primary={'Theo dõi'} />
                </ListItem>
              </Link>

              <Link href="/profile/me">
                <ListItem button key={4}>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary={'Bạn bè'} />
                </ListItem>
              </Link>

              <Link href="/profile/me">
                <ListItem button key={22}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText primary={'Lịch sử'} />
                </ListItem>
              </Link>

              <Link href="/profile/me">
                <ListItem button key={23}>
                  <ListItemIcon>
                    <ThumbUpAlt />
                  </ListItemIcon>
                  <ListItemText primary={'Đã thích'} />
                </ListItem>
              </Link>
            </List>
          )}
        </List>
      </Drawer>
    )
  }
}

LeftSide.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(LeftSide)
