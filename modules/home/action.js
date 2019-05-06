import { createAction } from 'redux-actions'
export const getSuggestMoviesSuccess = createAction('about-us/GET_SUGGEST_MOVIES_SUCCESS')

export const getSuggestMovies = (params = { limit: 8, page: 1 }) => async (
  dispatch,
  getState,
  { fetchApi }
) => {
  let loadedData = getState().home.suggestMovies
  if (!loadedData.loaded) {
    const res = await fetchApi('/movies/suggests', {
      method: 'GET',
      params
    })
    return dispatch(getSuggestMoviesSuccess(res.data))
  }
}
