import { createContext, useState, useEffect, useReducer} from 'react'
import {createUserDocFromAuth, onAuthStateChangedListener, signOutUser} from '../utils/firebase'
import { createAction } from '../utils/reducer'

export const UserContext = createContext({
  setUser: () => null,
  user: null
})

export const USER_ACTION_TYPES = {
  SET_USER: 'SET_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action
  switch(type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`unhandled type ${type} in userReducer`)
  }
}

const INIT_STATE = {
  user: null
}

export const UserProvider = ({children}) => {
  // const [user, setUser] = useState(null)
  const [ {user}, dispatch] = useReducer(userReducer, INIT_STATE)
  
  const setUser = (user) => {
    dispatch(createAction(
      USER_ACTION_TYPES.SET_USER,
      {user}
    ))
  }
  
  const value = {user, setUser}
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocFromAuth(user)
      }
      setUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}


/* 

const userReducer = (state, action) => {

  return {
    user: null,
  }
}
*/