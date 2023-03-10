import SignUpForm from "../sign-up-form"
import SignInForm from '../sign-in-form'
import './styles.scss'
const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default SignIn