import { handleActions } from 'redux-actions'
import { getMoviesOwnSuccess,
  getMoviesLikedSuccess,
  getMoviesFollowedSuccess,
  getGroupsOwnSuccess,getProfileSuccess } from './action'

const defaultState = {
  moviesOwn: {
    loadedUserId: '',
    data: [],
    pagination: {},
    loaded: false
  },
  moviesLiked: {
    loadedUserId: '',
    data: [],
    pagination: {},
    loaded: false
  },
  moviesFollowed: {
    loadedUserId: '',
    data: [],
    pagination: {},
    loaded: false
  },
  groupsOwn: {
    loadedUserId: '',
    data: [],
    pagination: {},
    loaded: false
  },
  profile: {
    loadedUserId: '',
    loaded: false
  }
}
export default handleActions(
  {
    [getMoviesOwnSuccess]: (state, action) => ({
      ...state,
      moviesOwn: {...action.payload,loaded: true}
    }),
    [getMoviesLikedSuccess]: (state, action) => ({
      ...state,
      moviesLiked: {...action.payload,loaded: true}

    }),
    [getMoviesFollowedSuccess]: (state, action) => ({
      ...state,
      moviesFollowed: {...action.payload,loaded: true}
    }),
    [getGroupsOwnSuccess]: (state, action) => ({
      ...state,
      groupsOwn: {...action.payload,loaded: true}
    }),
    [getProfileSuccess]: (state, action) => ({
      ...state,
      profile: {...action.payload,loaded: true}
    }),
    // [moviesOwn]: (state, action) => ({
    //   ...state,
    //   ...action.payload,
    //   loaded: true
    // }),
  },
  defaultState
)
