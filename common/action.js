import { createAction } from 'redux-actions'
// import qs from 'qs'
// import _ from 'lodash'
import wCache from '../common/utils/wCache'
import * as cookies from '../common/utils/cookie'
// // import * as tracking from '../common/utils/tracking'
// const sortMakes = makes => {
//   const ordered = _.orderBy(makes, 'carCount', 'desc')
//   const to15 = _.slice(ordered, 0, 15)
//   return _.concat(to15, _.orderBy(makes, 'name', 'asc'))
// }

export const moduleName = 'common'
export const loadCommonData = createAction('common_loadCommonData')

// export const searchStart = createAction('common/SEARCH_START')
// export const searchSuccess = createAction('common/SEARCH_SUCCESS')
// export const searchFacetSuccess = createAction('common/SEARCH_FACET_SUCCESS')
// export const searchError = createAction('common/SEARCH_ERROR')

// export const findMakeSuccess = createAction('common/FIND_MAKE_SUCCESS')

// export const findModelByMakeSuccess = createAction('common/FIND_MODEL_SUCCESS')

// export const getLikedCarsSuccess = createAction('common/GET_LIKED_CARS_SUCCESS')
// export const getMoviesSuccess = createAction('common/LIKED_CAsfdfsdR_SUCCESS')
export const loginSuccessAction = createAction('common/USER_LOGIN_SUCCESS')
export const logoutSuccessAction = createAction('common/USER_LOGOUT_SUCCESS')

export const openLeftSideAction = createAction('ui/OPEN_LEFT_SIDE_ACTION')
export const openLoginAction = createAction('ui/OPEN_LOGIN_POPUP_ACTION')
export const openRegisterAction = createAction('ui/OPEN_REGISTER_POPUP_ACTION')
export const openForgotPasswordAction = createAction('ui/OPEN_FORGOT_PASSWORD_ACTION')
export const openAlertAction = createAction('ui/OPEN_ALERT_ACTION')

export const getSuggestMoviesSuccess = createAction('common/GET_SUGGEST_MOVIES_SUCCESS')
export const getNewMoviesSuccess = createAction('common/GET_NEW_MOVIES_SUCCESS')

export const autoSave = (data = {}) => (dispatch, getState, { fetchApi }) => {
  // fetchApi('/api/user/autosave', { method: 'POST', data }).then(() => {
  // let common = getState().common
  // const commonData = { ...common, user: { ...common.user, ...data } }
  //   wCache.updateCache('masterData', masterData)
  // return dispatch(loadCommonData(commonData))
  return
  // })
}

export const getSuggestMovies = (params = { limit: 8, page: 1 }) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  let loadedData = getState().common.suggestMovies || {}
  if (!loadedData.loaded) {
    const res = await fetchApi('/movies/suggests', {
      method: 'GET',
      params
    })
    return dispatch(getSuggestMoviesSuccess(res.data))
  }
}

export const getNewMovies = (params = { limit: 8, page: 1 }) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  let loadedData = getState().common.newMovies
  if (!loadedData.loaded) {
    const res = await fetchApi('/movies', {
      method: 'GET',
      params: { ...params, sort: '-createdAt' }
    })
    return dispatch(getNewMoviesSuccess(res.data))
  }
}

// export const changeAvatar = (data = {}) => (dispatch, getState, { fetchApi }) =>
//   fetchApi(`/api/user/${data._id}/profilepic`, {
//     method: 'POST',
//     data: data.formData,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   }).then(() => {
//     let common = getState().common
//     const masterData = { ...common, user: { ...common.user, ...data } }
//     wCache.updateCache('masterData', masterData)
//     return dispatch(loadCommonData(masterData))
//   })
// export const changePassword = (data = {}) => async (dispatch, getState, { fetchApi }) => {
//   await fetchApi(`/api/user/${data._id}/changepassword`, { method: 'POST', data }).then(() => {
//     let common = getState().common
//     const masterData = { ...common, user: { ...common.user, ...data } }
//     wCache.updateCache('masterData', masterData)
//     return dispatch(loadCommonData(masterData))
//   })
// }
export const getOptionsGenres = () => (dispatch, getState, { fetchApi }) => {
  let common = getState().common
  if (!(common.options && common.options.genres && common.options.genres.length)) {
    fetchApi('/genres', {
      params: {
        limit: 100
      }
    }).then(res => {
      const genres =
        res.data &&
        res.data.data &&
        res.data.data.map(genre => ({
          value: genre.name,
          label: genre.name
        }))
      const commonData = {
        ...common,
        options: { ...common.options, ...{ genres } }
      }
      console.log(commonData)
      wCache.updateCache('commonData', commonData)
      return dispatch(loadCommonData(commonData))
    })
  }
}

// export const getSearchFacet = () => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const response = await fetchApi('/api/car/search', {
//       method: 'GET',
//       params: { countOnly: true, facet: true, populate_accessory: true },
//       paramsSerializer: function(params) {
//         return qs.stringify(params, { arrayFormat: 'repeat' })
//       }
//     })
//     return dispatch(searchFacetSuccess(response.data && response.data.facet))
//   } catch (error) {}
// }
// export const findMake = () => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const response = await fetchApi('/api/car/get-all-makes', { method: 'GET' })
//     return dispatch(findMakeSuccess(sortMakes(response.data)))
//   } catch (e) {}
// }
// export const findMakeFromKeywords = keywords => (dispatch, getState, { fetchApi }) => {
//   if (!keywords) return null
//   const { makes, data } = _.get(getState(), 'common.searching', {})
//   const runtimeFacet = _.get(data, 'facet', {})
//   const facetedMakes = _.get(runtimeFacet, 'make.faceted.buckets')
//   let make =
//     facetedMakes &&
//     facetedMakes.length === 1 &&
//     facetedMakes[0].key &&
//     _.find(makes, o => o._id === facetedMakes[0].key)
//   if (!make && facetedMakes && facetedMakes.length > 1 && facetedMakes.length < 5) {
//     const expectMake = facetedMakes[0]
//     if (!_.find(_.slice(facetedMakes, 1), o => o.doc_count * 50 > expectMake.doc_count)) {
//       make = _.find(makes, o => o._id === expectMake.key)
//     }
//   }
//   make = make && make.key && keywords && _.toLower(keywords).includes(make.key) && make
//   if (!make) {
//     make = _.find(makes, o => o.key === _.toLower(keywords))
//   }
//   return make
// }
// export const findModelByMake = makeId => async (dispatch, getState, { fetchApi }) => {
//   try {
//     if (!makeId) return dispatch(findModelByMakeSuccess([]))
//     const response = await fetchApi('/api/model', {
//       method: 'GET',
//       params: { make: makeId, hasCar: true }
//     })
//     return dispatch(findModelByMakeSuccess(response.data))
//   } catch (e) {}
// }

// export const getLikedCars = () => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const response = await fetchApi('/api/like')
//     return dispatch(getLikedCarsSuccess(response.data))
//   } catch (e) {}
// }
// export const likeCar = (car = {}) => async (dispatch, getState, { fetchApi }) => {
//   try {
//     const state = getState()
//     const status = _.find(
//       _.get(state, 'common.likedCars.data', []),
//       o => o.car._id === car._id && o.status === 1
//     )
//       ? 2
//       : 1
//     await fetchApi('/api/like', {
//       method: 'post',
//       data: {
//         car: car._id,
//         status
//       }
//     })
//     dispatch(likeCarsSuccess({ car, status }))
//   } catch (error) {
//     if (process.browser && error.response.status === 401) {
//       dispatch(openLoginAction(true))
//     }
//   }
// }

async function loginAndRegister(dispatch, getState, fetchApi, data) {
  let common = getState().common
  let dataUser = data.data || {}
  const commonData = {
    ...common,
    isAuthenticated: true,
    user: { ...common.user, ...dataUser }
    // likedCars: {
    //   loaded: true,
    //   data: likeCars.data
    // }
  }
  console.log(dataUser)
  wCache.updateCache('commonData', commonData)
  cookies.setCookie('token', dataUser.token, 60)
  dispatch(loginSuccessAction(dataUser))
}

export const openLeftSideDrawer = state => (dispatch, getState, { fetchApi }) => {
  dispatch(openLeftSideAction(state))
}

export const login = loginResult => async (dispatch, getState, { fetchApi }) => {
  loginAndRegister(dispatch, getState, fetchApi, loginResult.data)
}
export const loginAction = values => async (dispatch, getState, { fetchApi }) => {
  return fetchApi('/users/login', {
    method: 'POST',
    data: values
  }).then(res => loginAndRegister(dispatch, getState, fetchApi, res.data))
}
export const openLoginPopup = state => (dispatch, getState, { fetchApi }) => {
  dispatch(openLoginAction(state))
}

export const register = registerResult => async (dispatch, getState, { fetchApi }) => {
  loginAndRegister(dispatch, getState, fetchApi, registerResult.data)
}
export const registerAction = values => async (dispatch, getState, { fetchApi }) => {
  return fetchApi('/users', {
    method: 'POST',
    data: values
  }).then(data => loginAndRegister(dispatch, getState, fetchApi, data.data))
}
export const openRegisterPopup = state => dispatch => {
  dispatch(openRegisterAction(state))
}

export const openForgotPasswordDialog = state => dispatch => {
  dispatch(openForgotPasswordAction(state))
}

export const logout = () => async dispatch => {
  cookies.setCookie('token', '', -1)
  // eslint-disable-next-line no-restricted-globals
  document.location.href = '/'
  dispatch(logoutSuccessAction())
  dispatch(loadCommonData({}))
}

export const openMessageAlert = state => dispatch => {
  dispatch(openAlertAction(state))
}
