import { createAction } from 'redux-actions'
export const getMovieByIdSuccess = createAction('about-us/GET_SUGGEST_MOVIES_SUCCESS')

export const getMovieById = movieId => async (dispatch, getState, { fetchApi }) => {
  let loadedData = getState().movie
  if (!loadedData || loadedData._id !== movieId) {
    const res = await fetchApi(`/movies/${movieId}`, {})
    return dispatch(getMovieByIdSuccess(res.data && res.data.data))
  }
}
