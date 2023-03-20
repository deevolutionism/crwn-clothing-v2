import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleWare: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})

export const persistor = persistStore(store)