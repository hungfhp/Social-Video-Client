import { createAction } from 'redux-actions'
export const getMoviesSuccess = createAction('movies/GET_SUGGEST_MOVIES_SUCCESS')

export const getMovies = (params = { limit: 16, page: 1 }) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  // let loadedData = getState().movies
  // if (!loadedData.loaded || loadedData.keyword) {
  const res = await fetchApi(`/movies`, { params })
  return dispatch(getMoviesSuccess({ ...res.data, keyword: '' }))
  // }
}

export const searchMovies = (keyword, params = { limit: 16, page: 1 }) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  const res = await fetchApi(`/movies/search`, { params: { ...params, search: keyword } })
  return dispatch(getMoviesSuccess({ ...res.data, keyword }))
}
