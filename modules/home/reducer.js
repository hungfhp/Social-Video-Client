import { handleActions } from 'redux-actions'
import { getSuggestMoviesSuccess, getNewMoviesSuccess } from './action'

const defaultState = {
  suggestMovies: {
    data: [],
    pagination: {},
    loaded: false
  },
  newMovies: {
    data: [],
    pagination: {},
    loaded: false
  }
}
export default handleActions(
  {
    [getSuggestMoviesSuccess]: (state, action) => ({
      ...state,
      suggestMovies: { ...action.payload, loaded: true }
    }),
    [getNewMoviesSuccess]: (state, action) => ({
      ...state,
      newMovies: { ...action.payload, loaded: true }
    })
  },
  defaultState
)
