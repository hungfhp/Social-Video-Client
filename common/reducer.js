import { handleActions } from 'redux-actions'
import {
  getSuggestMoviesSuccess,
  getNewMoviesSuccess,
  loadCommonData,
  loginSuccessAction,
  logoutSuccessAction
} from './action'

const defaultState = {
  isAuthenticated: false,
  options: {
    genres: [],
    quanlities: [
      { label: 'CAM', value: 'CAM' },
      { label: 'HD', value: 'HD' },
      { label: 'FULL HD', value: 'FULL HD' }
    ],
    shares: [
      { label: 'Cá nhân', value: 'private' },
      { label: 'Bạn bè', value: 'friend' },
      { label: 'Công khai', value: 'public' }
    ]
  },
  user: {},
  likedMovies: { loaded: false, data: [] },
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
    ...state,
    user: {},
    isAuthenticated: false
  }),
  [getSuggestMoviesSuccess]: (state, action) => ({
    ...state,
    suggestMovies: { ...action.payload, loaded: true }
  }),
  [getNewMoviesSuccess]: (state, action) => ({
    ...state,
    newMovies: { ...action.payload, loaded: true }
  })
}

export default handleActions(handlers, defaultState)
