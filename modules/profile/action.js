import { createAction } from 'redux-actions'
import { loadCommonData } from '../../common/action'
import wCache from '../../common/utils/wCache'
export const getMoviesOwnSuccess = createAction('profile/GET_MOVIES_1_SUCESS')
export const getMoviesLikedSuccess = createAction('profile/GET_MOVIES_d2f_SUCESS')
export const getMoviesFollowedSuccess = createAction('profile/GET_MOVIES_f3_SUCESS')
export const getGroupsOwnSuccess = createAction('profile/GET_MOVIES_4df_SUCESS')
export const getProfileSuccess = createAction('profile/GET_MOVIES_da5sdf_SUCESS')
export const getFollowersSuccess = createAction('profile/GET_MOVIasdES_da5sdf_SUCESS')
export const getFollowingSuccess = createAction('profile/GET_MOVIEasdS_da5sdf_SUCESS')
export const getRequestersSuccess = createAction('profile/GET_MOsdfVIEasdS_da5sdf_SUCESS')
export const getFriendsSuccess = createAction('profile/GET_MOVIsdfsasEasdS_da5sdf_SUCESS')

export const getMoviesOwn = (req, userId, params) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.moviesOwn
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(
      `/users/${userId}/movies/own`,
      {
        params: {
          ...loadedData.pagination,
          ...params
        }
      },
      req
    )
    return dispatch(getMoviesOwnSuccess({ ...res.data, loadedUserId: userId }))
  }
}

export const getMoviesLiked = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.moviesLiked
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(
      `/users/${userId}/movies/liked`,
      {
        params: {
          populate: [
            {
              path: 'movie',
              model: 'Movie'
            }
          ]
        }
      },
      req
    )
    if (res.data.data && res.data.data.length) {
      let data = []
      data = res.data.data.map(o => {
        return o.movie
      })
      res.data = { ...res.data, data }
      return dispatch(getMoviesLikedSuccess({ ...res.data, loadedUserId: userId }))
    }
  }
}

export const getMoviesFollowed = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.moviesFollowed
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(`/users/${userId}/movies/followed`, {}, req)

    if (res.data.data && res.data.data.length) {
      let data = []
      data = res.data.data.map(o => {
        return o.movie
      })
      res.data = { ...res.data, data }
      return dispatch(getMoviesFollowedSuccess({ ...res.data, loadedUserId: userId }))
    }
    return dispatch(getMoviesFollowedSuccess({ ...loadedData, data: [], loadedUserId: userId }))
  }
}

export const getGroupsOwn = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.groupsOwn
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(`/users/${userId}/groups/own`, {}, req)
    return dispatch(getGroupsOwnSuccess({ ...res.data, loadedUserId: userId }))
  }
}

export const getProfile = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.profile
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(`/users/${userId}`, {}, req)
    return dispatch(getProfileSuccess({ ...res.data, loadedUserId: userId }))
  }
}

export const updateProfile = (req, userId, data) => async (dispatch, getState, { fetchApi }) => {
  const res = await fetchApi(`/users/${userId}`, { method: 'PUT', data }, req)

  let common = getState().common
  const commonData = { ...common, user: { ...common.user, ...res.data.data } }
  wCache.updateCache('commonData', commonData)
  dispatch(loadCommonData(commonData))
  return dispatch(getProfileSuccess({ ...res.data, loadedUserId: userId }))
}

export const getRequesters = userId => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.requesters
  const res = await fetchApi(`/users/${userId}/requests`)
  if (res.data.data && res.data.data.length) {
    return dispatch(getRequestersSuccess({ ...res.data, loadedUserId: userId }))
  } else {
    return dispatch(getRequestersSuccess({ ...loadedData, data: [], loadedUserId: userId }))
  }
}

export const createRequest = targetId => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/relationships`, {
    method: 'POST',
    data: {
      target: targetId
    }
  })
}

export const acceptRequest = targetId => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/relationships/accept`, {
    method: 'PUT',
    data: {
      target: targetId
    }
  })
  let user = getState().common.user
  getRequesters(user._id)
  getFriends(user._id)
}

export const rejectRequest = targetId => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/relationships/reject`, {
    method: 'PUT',
    data: {
      target: targetId
    }
  })
  let user = getState().common.user
  getRequesters(user._id)
  getFriends(user._id)
}

export const removeFriend = targetId => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/relationships/remove/${targetId}`, {
    method: 'DELETE'
  })
  let user = getState().common.user
  getRequesters(user._id)
  getFriends(user._id)
}

export const getFriends = userId => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.friends
  const res = await fetchApi(`/users/${userId}/friends`)
  if (res.data.data && res.data.data.length) {
    return dispatch(getFriendsSuccess({ ...res.data, loadedUserId: userId }))
  } else {
    return dispatch(getFriendsSuccess({ ...loadedData, data: [], loadedUserId: userId }))
  }
}

export const getFollowers = userId => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.followers
  const res = await fetchApi(`/follows/users/followers/${userId}`)
  if (res.data.data && res.data.data.length) {
    let data = []
    data = res.data.data.map(o => {
      return o.user
    })
    res.data = { ...res.data, data }
    return dispatch(getFollowersSuccess({ ...res.data, loadedUserId: userId }))
  } else {
    return dispatch(getFollowersSuccess({ ...loadedData, data: [], loadedUserId: userId }))
  }
}

export const getFollowing = userId => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.following
  const res = await fetchApi(`/follows/users/following/${userId}`)
  if (res.data.data && res.data.data.length) {
    let data = []
    data = res.data.data.map(o => {
      return o.follow
    })
    res.data = { ...res.data, data }
    return dispatch(getFollowingSuccess({ ...res.data, loadedUserId: userId }))
  } else {
    return dispatch(getFollowingSuccess({ ...loadedData, data: [], loadedUserId: userId }))
  }
}

export const createFollowUser = followId => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/follows/users`, {
    method: 'POST',
    data: {
      follow: followId
    }
  })
  console.log('success')
  // return dispatch(getProfileSuccess({ ...res.data, loadedUserId: userId }))
}

export const deleteFollowUser = followId => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/follows/users/${followId}`, {
    method: 'DELETE'
  })
  console.log('success')
  // return dispatch(getProfileSuccess({ ...res.data, loadedUserId: userId }))
}

export const getFollowedUser = (userId, followId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/follows/users`, {
    params: {
      filters: {
        user: userId,
        follow: followId
      }
    }
  })
  return (
    (response.data && response.data.data && response.data.data.length && response.data.data[0]) ||
    (response.data &&
      response.data.followUsers &&
      response.data.followUsers.length &&
      response.data.followUsers[0]) ||
    {}
  )
}
