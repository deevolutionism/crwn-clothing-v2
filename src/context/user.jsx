import { createContext, useState, useEffect} from 'react'
import {createUserDocFromAuth, onAuthStateChangedListener, signOutUser} from '../utils/firebase'

export const UserContext = createContext(null)


export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const value = {user, setUser}

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
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
