import { Fragment, useContext } from 'react'
import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './style.jsx'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg' 
import { UserContext } from '../../context/user'
import { signOutUser } from '../../utils/firebase'
import CartIcon from '../../components/cart-icon'
import CartDropdown from '../../components/cart-dropdown'
import { CartContext } from '../../context/cart'

const Navigation = () => {
  const { user } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {
            user ? (
              <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
            )
          }
          <CartIcon />
          
        </NavLinks>
        { isCartOpen && <CartDropdown /> }
      </NavigationContainer>
    </Fragment>
  )
}

export default Navigation