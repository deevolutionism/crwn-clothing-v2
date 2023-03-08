import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase"

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    console.log(user)
    const userDocRef = await createUserDocFromAuth(user)
  }
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  )
}

export default SignIn