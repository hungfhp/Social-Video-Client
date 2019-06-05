import { handleActions } from 'redux-actions'
import {
  getSuggestMoviesSuccess,
  getNewMoviesSuccess,
  getRecommendMoviesSuccess,
  getSuggestUsersSuccess
} from './action'

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
  },
  recommendMovies: {
    data: [],
    pagination: {},
    loaded: false
  },
  suggestUsers: {
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
    }),
    [getRecommendMoviesSuccess]: (state, action) => ({
      ...state,
      recommendMovies: { ...action.payload, loaded: true }
    }),
    [getSuggestUsersSuccess]: (state, action) => ({
      ...state,
      suggestUsers: { ...action.payload, loaded: true }
    })
  },
  defaultState
)
