import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { login, openLoginPopup, openForgotPasswordDialog } from '../../common/action'

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions)

const validate = values => {
  let errors = {}
  if (!values.password || (values.password && (values.password.length < 6 || values.password.length > 50))) {
    errors.password = 'ERROR_PASSWORD_LENGTH'
  }
  if (!values.email) {
    errors.email = 'ERR_EMAIL_REQUIRED'
  } else if (!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(String(values.email.trim()))) {
    errors.email = 'ERROR_EMAIL_INVALID'
  }
  return errors
}
@reduxForm({
  form: 'login',
  touchOnBlur: false,
  validate,
  shouldError: () => true
})
@connect(
  state => ({
    user: state.common.user,
    openLogin: state.commonUIState.openLogin
  }),
  { login, openLoginPopup, openForgotPasswordDialog }
)
export class LoginDialog extends React.Component {
  state = {
  }
  
  handleClose = () => {
    this.props.openLoginPopup(false)
  }

  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          // open={this.props.openLogin}
          open={true}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Modal title
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
