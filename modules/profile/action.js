import { createAction } from 'redux-actions'
import { loadCommonData } from '../../common/action'
import wCache from '../../common/utils/wCache'
export const getMoviesOwnSuccess = createAction('profile/GET_MOVIES_1_SUCESS')
export const getMoviesLikedSuccess = createAction('profile/GET_MOVIES_d2f_SUCESS')
export const getMoviesFollowedSuccess = createAction('profile/GET_MOVIES_f3_SUCESS')
export const getGroupsOwnSuccess = createAction('profile/GET_MOVIES_4df_SUCESS')
export const getProfileSuccess = createAction('profile/GET_MOVIES_da5sdf_SUCESS')

export const getMoviesOwn = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.moviesOwn
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(`/users/${userId}/movies/own`, {}, req)
    return dispatch(getMoviesOwnSuccess({ ...res.data, loadedUserId: userId }))
  }
}

export const getMoviesLiked = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.moviesLiked
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(`/users/${userId}/movies/liked`, {}, req)
    return dispatch(getMoviesLikedSuccess({ ...res.data, loadedUserId: userId }))
  }
}

export const getMoviesFollowed = (req, userId) => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().profile.moviesFollowed
  if (!loadedData.loaded || loadedData.loadedUserId !== userId) {
    const res = await fetchApi(`/users/${userId}/movies/followed`, {}, req)
    return dispatch(getMoviesFollowedSuccess({ ...res.data, loadedUserId: userId }))
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
