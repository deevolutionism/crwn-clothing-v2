import { compose, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

// root-reducer
import { rootReducer } from './root-reducer'

// const middleWares = [logger]

const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    console.log('logger pass')
    return next(action)
  }

  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('current state', store.getState())

  next(action)

  console.log('next state', store.getState())
}

// const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = configureStore({
  reducer: rootReducer,
  middleWare: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})