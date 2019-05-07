import { handleActions } from 'redux-actions'
import { loadCommonData, loginSuccessAction, logoutSuccessAction } from './action'

const defaultState = {
  isAuthenticated: false,
  masterData: {},
  user: {},
  likedMovies: { loaded: false, data: [] }
}

const handlers = {
  [loadCommonData]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [loginSuccessAction]: (state, action) => ({
    ...state,
    user: action.payload,
    isAuthenticated: true
  }),
  [logoutSuccessAction]: (state, action) => ({
    ...state
  })
}

export default handleActions(handlers, defaultState)
