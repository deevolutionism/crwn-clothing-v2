import { auth, signInWithGooglePopup, createUserDocFromAuth, signInWithGoogleRedirect } from "../../utils/firebase"
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from "../sign-up-form"

const SignIn = () => {
  
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()

    const userDocRef = await createUserDocFromAuth(user)
  }


  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn