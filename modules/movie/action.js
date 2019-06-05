import { createAction } from 'redux-actions'
export const getMovieByIdSuccess = createAction('movie/GET_SUGGEST_MOVIES_SUCCESS')
export const checkOwnSuccess = createAction('movie/GET_SUGGEST_MOVIEsdfS_SUCCESS')
export const getLikeSuccess = createAction('movie/GET_SUGGEST_MOVIESsdfasd_SUCCESS')
export const getFollowSuccess = createAction('movie/GET_SUGGEST_MOVIES_SUddCCESS')
export const getRateSuccess = createAction('movie/GET_SUGGEST_MOVIES_SUCCESS1')

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

export const checkOwn = (req, userId, movieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(
    `/users/${userId}/movies/own`,
    {
      params: {
        filters: {
          _id: movieId
        }
      }
    },
    req
  )
  const checked = !!(response.data && response.data.data && response.data.data.length)
  return dispatch(checkOwnSuccess(checked))
}

export const getLike = (userId, movieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/likes`, {
    params: {
      filters: {
        user: userId,
        movie: movieId
      }
    }
  })
  return dispatch(getLikeSuccess(response.data && response.data.data && response.data.data.length&& response.data.data[0] || {}))
}

export const createLike = (movieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/likes`, {
    method: 'POST',
    data: {
      movie: movieId
    }
  })
  return dispatch(getLikeSuccess(response.data && response.data.data || {}))
}

export const deleteLike = (likeId) => async (dispatch, getState, { fetchApi }) => {
   await fetchApi(`/likes/${likeId}`, {
    method: 'DELETE'
  })
  return dispatch(getLikeSuccess({}))
}

export const getFollow = (userId, movieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/follows/movies`, {
    params: {
      filters: {
        user: userId,
        movie: movieId
      }
    }
  })
  return dispatch(getFollowSuccess((response.data && response.data.data && response.data.data.length&& response.data.data[0]) || response.data && response.data.followMovies && response.data.followMovies.length&& response.data.followMovies[0] || {}))
}

export const createFollow = (movieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/follows/movies`, {
    method: 'POST',
    data: {
      movie: movieId
    }
  })
  return dispatch(getFollowSuccess(response.data && response.data.data || {}))
}

export const deleteFollow = (followMovieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/follows/movies/${followMovieId}`, {
    method: 'DELETE'
  })
  return dispatch(getFollowSuccess({}))
}

export const getRate = (userId, movieId) => async (dispatch, getState, { fetchApi }) => {
  const response = await fetchApi(`/rates`, {
    params: {
      filters: {
        user: userId,
        movie: movieId
      }
    }
  })
  const geted = !!(response.data && response.data.data && response.data.data.length)
  return dispatch(getRateSuccess(geted))
}

