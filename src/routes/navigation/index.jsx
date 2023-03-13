import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
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
      <div className='navigation'>
        <Link className='logo-container' to="/">
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          {
            user ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>SIGN IN</Link>
            )
          }
          <CartIcon />
          
        </div>
        { isCartOpen && <CartDropdown /> }
      </div>
    </Fragment>
  )
}

export default Navigation