import { handleActions } from 'redux-actions'
import { loginSuccessAction } from './action'

const defaultState = {
  isAuthenticated: false,
  masterData: {},
  user: {},
  likedMovies: { loaded: false, data: [] }
}

const handlers = {
  [loginSuccessAction]: (state, action) => ({
    ...state,
    user: action.payload,
    isAuthenticated: true
  })
}

export default handleActions(handlers, defaultState)
