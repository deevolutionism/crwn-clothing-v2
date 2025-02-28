import {useState} from 'react'
import Button from '../button'
import FormInput from '../form-input'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth, signInWithGooglePopup} from '../../utils/firebase'
import { BUTTON_TYPE_CLASSES } from '../button'
import './styles.scss'

const defaultFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formInput, setFormInput] = useState(defaultFields)
  const {email, password} = formInput
  const onChange = (e) => { 
    e.preventDefault()
    const {name, value} = e.target
    setFormInput({...formInput, [name]: value })
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup()
  }

  const resetForm = () => {
    setFormInput(defaultFields)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      resetForm()
    } catch (e) {
      switch(e.code) {
        case 'auth/wrong-password':
          alert('incorrect password or email')
          break;
        case 'auth/user-not-found':
          alert('no user associated with email')
          break;
        default:
          console.error(e)
      }
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email"
          value={email}
          label="Email"
          onChange={onChange}
          type="email"
          required
        />
        <FormInput 
          name="password"
          value={password}
          label="Password"
          onChange={onChange}
          type="password"
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm