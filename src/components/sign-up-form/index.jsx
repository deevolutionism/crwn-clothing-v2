import { useState } from 'react'
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocFromAuth 
} from '../../utils/firebase'
import FormInput from '../form-input'
import Button from '../button'
import './styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword} = formFields

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value})
  }
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // confirm passwords mathc
    // create authenticated user
    // create user document
    if(confirmPassword !== password) return alert('password mismatch');
    
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      createUserDocFromAuth({...user, displayName})
      resetFormFields()
    } catch (e) {
      if(e.code === 'auth/email-already-in-use') {
        alert('email already in use!')
      }
      console.error('error encountered creating user', e)
    }
  }
  
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={(e) => { handleSubmit(e) }}>

        <FormInput
          label={"Display Name"}
          required 
          type="text" 
          name="displayName" 
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label={"Email"} 
          required
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
        />
        
        <FormInput
          label={"Password"} 
          required 
          type="password" 
          name="password"
          value={password}
          onChange={handleChange}      
        />

        <FormInput
          label={"Confirm Password"} 
          required 
          type="password" 
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}      
        />

        

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SignUpForm