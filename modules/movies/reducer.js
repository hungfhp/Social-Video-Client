import { handleActions } from 'redux-actions'
import { getMoviesSuccess } from './action'

const defaultState = {
  data: [],
  pagination: {},
  keyword: '',
  loaded: false
}
export default handleActions(
  {
    [getMoviesSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
      loaded: true
    })
  },
  defaultState
)
