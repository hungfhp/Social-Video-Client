import { createAction } from 'redux-actions'
export const getMovieByIdSuccess = createAction('about-us/GET_SUGGEST_MOVIES_SUCCESS')

export const getMovieById = movieId => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().movie
  if (movieId && (!loadedData || loadedData._id !== movieId)) {
    const res = await fetchApi(`/movies/${movieId}`, {})
    return dispatch(getMovieByIdSuccess(res.data && res.data.data))
  }
}

export const uploadFile = (path = 'file', data = {}) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  const response = await fetchApi(`/upload/${path}`, {
    method: 'POST',
    data
  })
  return response.data && response.data.data
}
