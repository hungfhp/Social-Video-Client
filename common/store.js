import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import commonReducer from './reducer'
import fetchApi from './utils/fetchApi'
import commonUIReducer from './ui-reducer'
import getConfig from 'next/config'

const isDev = getConfig().serverRuntimeConfig.isDev

const buildStore = (reducers, initialState) => {
  const reducersForCombine = {
    common: commonReducer,
    commonUIState: commonUIReducer,
    form,
    ...reducers
  }
  // Only use redux-logger on client-side
  let middlewares = [ReduxThunk.withExtraArgument({ fetchApi })]
  let composeEnhancers = compose
  if (isDev && typeof window === 'object') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const store = createStore(
    combineReducers(reducersForCombine),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  store.reducers = reducersForCombine
  return store
}
/**
 * Create redux store at both server-side and client, sync state and reducers
 * @param {<Boolean>} isServer
 * @param {<name>: <reducer>} reducers
 * @param {<Object>} initialState
 */
export const initStore = (isServer, reducers, initialState) => {
  if (isServer && typeof window === 'undefined') {
    const store = buildStore(reducers, initialState)
    return store
  } else {
    if (!window.store) {
      window.store = buildStore(reducers, initialState)
    } else {
      let reducersForCombine = window.store.reducers
      Object.keys(reducers).forEach(reducerName => {
        if (!(reducerName in reducersForCombine)) {
          reducersForCombine = {
            ...reducersForCombine,
            [reducerName]: reducers[reducerName]
          }
        }
      })
      if (reducersForCombine !== window.store.reducers) {
        window.store.replaceReducer(combineReducers(reducersForCombine))
        window.store.reducers = reducersForCombine
      }
    }
    return window.store
  }
}
