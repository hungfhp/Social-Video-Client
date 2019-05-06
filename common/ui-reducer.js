import { handleActions } from 'redux-actions'
import {
  openAlertAction,
  openForgotPasswordAction,
  openRegisterAction,
  openLoginAction,
  openLeftSideAction
} from './action'
const defaultState = {
  openLeftSide: true,
  openLogin: false,
  openRegister: false,
  openForgotPassword: false,
  alertStatus: false,
  breadcrumbs: []
}

const handlers = {
  [openLeftSideAction]: (state, action) => ({
    ...state,
    openLeftSide: action.payload
  }),
  [openLoginAction]: (state, action) => ({
    ...state,
    openLogin: action.payload
  }),
  [openRegisterAction]: (state, action) => ({
    ...state,
    openRegister: action.payload
  }),
  [openForgotPasswordAction]: (state, action) => ({
    ...state,
    openForgotPassword: action.payload
  }),
  [openAlertAction]: (state, action) => ({
    ...state,
    alertStatus: action.payload
  })
}
export default handleActions(handlers, defaultState)
