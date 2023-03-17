import { createAction, createReducer } from '@reduxjs/toolkit'

export const USER_ACTION_TYPES = {
  SET_USER: 'user/setUser' 
}

const INIT_STATE = {
  user: null
}

export const setUser = createAction('user/setUser')

export const userReducer = createReducer(INIT_STATE, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.user = action.payload
    })
})

export const userSelector = state => state.user.user


// export const userReducer = (state = INIT_STATE, action) => {
//   const { type, payload } = action
  
//   switch(type) {
//     case USER_ACTION_TYPES.SET_USER:
//       return {
//         ...state,
//         currentUser: payload
//       }
//     default:
//       return state
//   }
// }
