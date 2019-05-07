import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { connect } from 'react-redux'
import { login, openRegisterPopup, openForgotPasswordDialog } from '../../common/action'
import RegisterForm from './RegisterForm'

@connect(
  state => ({
    user: state.common.user,
    openRegister: state.commonUIState.openRegister
  }),
  { login, openRegisterPopup, openForgotPasswordDialog }
)
export default class extends React.Component {
  state = {}

  handleClose = () => {
    this.props.openRegisterPopup(false)
  }

  render() {
    return (
      <div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.openRegister}
          // open={true}
          // maxWidth='sm'
        >
          <RegisterForm />
        </Dialog>
      </div>
    )
  }
}
