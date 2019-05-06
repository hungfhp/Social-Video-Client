import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import { login, openLoginPopup, openForgotPasswordDialog } from '../../common/action'
import LoginForm from './LoginForm'

@connect(
  state => ({
    user: state.common.user,
    openLogin: state.commonUIState.openLogin
  }),
  { login, openLoginPopup, openForgotPasswordDialog }
)
export default class extends React.Component {
  state = {}

  handleClose = () => {
    this.props.openLoginPopup(false)
  }

  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.openLogin}
          // open={true}
          // maxWidth='sm'
        >
          <LoginForm />
        </Dialog>
      </div>
    )
  }
}
