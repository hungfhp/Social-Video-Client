import { handleActions } from 'redux-actions'
import {
  checkOwnSuccess,
  getLikeSuccess,
  getFollowSuccess,
  getRateSuccess,
  getMovieByIdSuccess
} from './action'

const defaultState = {
  loaded: false,
  isOwn: false,
  liked: {},
  followed: {},
  rated: {}
}
export default handleActions(
  {
    [getMovieByIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      loaded: true
    }),
    [checkOwnSuccess]: (state, action) => ({
      ...state,
      isOwn: action.payload
    }),
    [getLikeSuccess]: (state, action) => ({
      ...state,
      liked: action.payload
    }),
    [getFollowSuccess]: (state, action) => ({
      ...state,
      followed: action.payload
    }),
    [getRateSuccess]: (state, action) => ({
      ...state,
      rated: action.payload
    })
  },
  defaultState
)
