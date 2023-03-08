import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg' 

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to="/">
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/shop'>SHOP</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Navigation