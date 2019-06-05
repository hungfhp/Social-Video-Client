import { handleActions } from 'redux-actions'
import {
  getMoviesOwnSuccess,
  getMoviesLikedSuccess,
  getMoviesFollowedSuccess,
  getGroupsOwnSuccess,
  getProfileSuccess,
  getFollowersSuccess,
  getFollowingSuccess,
  getRequestersSuccess,
  getFriendsSuccess
} from './action'

const defaultState = {
  moviesOwn: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  moviesLiked: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  moviesFollowed: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  groupsOwn: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  profile: {
    loadedUserId: '',
    loaded: false
  },
  requesters: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  friends: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  followers: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  },
  following: {
    loadedUserId: '',
    data: [],
    pagination: {
      limit: 12
    },
    loaded: false
  }
}
export default handleActions(
  {
    [getMoviesOwnSuccess]: (state, action) => ({
      ...state,
      moviesOwn: { ...action.payload, loaded: true }
    }),
    [getMoviesLikedSuccess]: (state, action) => ({
      ...state,
      moviesLiked: { ...action.payload, loaded: true }
    }),
    [getMoviesFollowedSuccess]: (state, action) => ({
      ...state,
      moviesFollowed: { ...action.payload, loaded: true }
    }),
    [getGroupsOwnSuccess]: (state, action) => ({
      ...state,
      groupsOwn: { ...action.payload, loaded: true }
    }),
    [getProfileSuccess]: (state, action) => ({
      ...state,
      profile: { ...action.payload, loaded: true }
    }),
    [getRequestersSuccess]: (state, action) => ({
      ...state,
      requesters: { ...action.payload, loaded: true }
    }),
    [getFriendsSuccess]: (state, action) => ({
      ...state,
      friends: { ...action.payload, loaded: true }
    }),
    [getFollowersSuccess]: (state, action) => ({
      ...state,
      followers: { ...action.payload, loaded: true }
    }),
    [getFollowingSuccess]: (state, action) => ({
      ...state,
      following: { ...action.payload, loaded: true }
    })
  },
  defaultState
)
