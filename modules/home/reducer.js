import { handleActions } from 'redux-actions'
import { getSuggestMoviesSuccess } from './action'

const defaultState = {
  suggestMovies: {
    data: [],
    pagination: {},
    loaded: false
    // params: {
    //   page: 1,
    //   limit: 8
    // }
  }
}
export default handleActions(
  {
    [getSuggestMoviesSuccess]: (state, action) => ({
      ...state,
      suggestMovies: { ...action.payload, loaded: true }
    })
  },
  defaultState
)
