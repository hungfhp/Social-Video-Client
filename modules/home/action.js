import { createAction } from 'redux-actions'
export const getSuggestMoviesSuccess = createAction('home/GET_SUGGEST_MOVIES_SUCCESS')
export const getNewMoviesSuccess = createAction('home/GET_NEW_MOVIES_SUCCESS')
export const getRecommendMoviesSuccess = createAction('home/GET_NEW_MasdasdOVIES_SUCCESS')
export const getSuggestUsersSuccess = createAction('home/saasdasdasdas')

export const getSuggestMovies = (params = { limit: 8, page: 1 }) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  let loadedData = getState().home.suggestMovies || {}
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
  let loadedData = getState().home.newMovies
  if (!loadedData.loaded) {
    const res = await fetchApi('/movies', {
      method: 'GET',
      params: { ...params, sort: '-createdAt' }
    })
    return dispatch(getNewMoviesSuccess(res.data))
  }
}

export const getRecommendMovies = req => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().home.newMovies

  if (!loadedData.loaded) {
    const res = await fetchApi(
      '/recommends/movies',
      {
        params: {
          limit: 8
        }
      },
      req
    )
    return dispatch(getRecommendMoviesSuccess(res.data))
  }
}

export const getSuggestUsers = req => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().home.suggestUsers

  if (!loadedData.loaded) {
    const res = await fetchApi(
      '/users/suggests',
      {
        params: {
          limit: 4
        }
      },
      req
    )
    return dispatch(getSuggestUsersSuccess(res.data))
  }
}
