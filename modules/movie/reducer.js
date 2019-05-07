import { handleActions } from 'redux-actions'
import { getMovieByIdSuccess } from './action'

const defaultState = {
  loaded: false
}
export default handleActions(
  {
    [getMovieByIdSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      loaded: true
    })
  },
  defaultState
)
