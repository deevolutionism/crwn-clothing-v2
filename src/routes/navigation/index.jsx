import { Fragment, useContext } from 'react'
import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from './style.jsx'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg' 
import { signOutUser } from '../../utils/firebase'
import CartIcon from '../../components/cart-icon'
import CartDropdown from '../../components/cart-dropdown'
import { useSelector } from 'react-redux'
import { userSelector } from '../../store/user/index.js'
import { isCartOpenSelector } from '../../store/cart/index.js'

const Navigation = () => {
  const user = useSelector(userSelector)
  const isCartOpen = useSelector(isCartOpenSelector)
  console.log('cart open', isCartOpen)
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