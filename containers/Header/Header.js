import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconInput from '@material-ui/icons/Input'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import LoginDialog from '../Login/LoginDialog'
import RegisterDialog from '../Register/RegisterDialog'
import { connect } from 'react-redux'
import { openLoginPopup, openRegisterPopup, openLeftSideDrawer, logout } from '../../common/action'
import Link from '../../components/Link'
import classNames from 'classnames'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: theme.shadows[1],
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: theme.drawers.left.width,
    width: `calc(100% - ${theme.drawers.left.width}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: -theme.spacing.unit * 2,
    marginRight: 20
  },
  avatar: {
    marginRight: 10,
    marginTop: 2,
    marginLeft: 10
  },
  hide: {
    display: 'none'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

@connect(
  state => ({
    user: state.common.user,
    isAuthenticated: state.common.isAuthenticated,
    openLeftSide: state.commonUIState.openLeftSide,
    openLogin: state.commonUIState.openLogin,
    openRegister: state.commonUIState.openRegister
  }),
  { openLoginPopup, openRegisterPopup, openLeftSideDrawer, logout }
)
class Header extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }

  handleClickOpenLoginDialog = () => {
    this.props.openLoginPopup(true)
  }

  handleClickOpenRegisterDialog = () => {
    this.props.openRegisterPopup(true)
  }

  handleClickOpenLeftSideDrawer = () => {
    this.props.openLeftSideDrawer(!this.props.openLeftSide)
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes, isAuthenticated, user, openLogin, openRegister } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMenu = (
      // <Menu
      //   anchorEl={anchorEl}
      //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      //   transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      //   open={true}
      //   onClose={this.handleMenuClose}
      // >
      //   <MenuItem onClick={this.handleMenuClose}>
      //     <Link href="/profile/my">Profile</Link>
      //   </MenuItem>
      //   <MenuItem onClick={this.props.logout}>Logout</MenuItem>
      // </Menu>
      <Popper open={isMenuOpen} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleMenuClose}>
                <MenuList>
                  <MenuItem onClick={this.handleMenuClose}>
                    <Link href="/profile/my">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                  <MenuItem onClick={this.props.logout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    )

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        {isAuthenticated ? (
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>
              <Link href="/profile/my">Profile</Link>
            </p>
          </MenuItem>
        ) : (
          <MenuItem onClick={this.handleClickOpenLoginDialog}>
            <IconButton color="inherit">
              <IconInput />
            </IconButton>
            <p>Login</p>
          </MenuItem>
        )}
      </Menu>
    )

    return (
      <React.Fragment>
        <AppBar position="fixed" color="default" className={classNames(classes.appBar, {})}>
          <Toolbar>
            <IconButton
              onClick={this.handleClickOpenLeftSideDrawer}
              className={classNames(classes.menuButton, {})}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography className={classes.title} variant="h6" color="inherit" noWrap> */}
            <Button color="inherit">
              <Link href="/home">Home</Link>
            </Button>
            {/* </Typography> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {isAuthenticated ? (
                <Avatar
                  aria-owns={isMenuOpen ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                  alt={user.name}
                  src={user.avatarUrl}
                  className={classes.avatar + ' clickable'}
                />
              ) : (
                // <IconButton color="inherit">
                //   <Badge badgeContent={17} color="secondary">
                //     <NotificationsIcon />
                //   </Badge>
                // </IconButton>
                <React.Fragment>
                  <Button color="primary" onClick={this.handleClickOpenLoginDialog}>
                    Login
                  </Button>
                  <Button color="primary" onClick={this.handleClickOpenRegisterDialog}>
                    Register
                  </Button>
                </React.Fragment>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <LoginDialog open={openLogin} />
        <RegisterDialog open={openRegister} />
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)