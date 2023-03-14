import SignUpForm from "../sign-up-form"
import SignInForm from '../sign-in-form'
import { AuthContainer} from './styles.jsx'
const SignIn = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  )
}

export default SignIn