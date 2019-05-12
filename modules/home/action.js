import { createAction } from 'redux-actions'
export const getSuggestMoviesSuccess = createAction('home/GET_SUGGEST_MOVIES_SUCCESS')
export const getNewMoviesSuccess = createAction('home/GET_NEW_MOVIES_SUCCESS')

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
