import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <NavLink to="/signup" className='header-signup'>
        Sign up
      </NavLink>
      <NavLink to='/signin' className='header-signin'>
        Sign in
      </NavLink>
    </header>
  )
}

export default Header;