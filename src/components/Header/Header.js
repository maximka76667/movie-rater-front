import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <NavLink to="/signup" className='header__signup'>
        Sign up
      </NavLink>
      <NavLink to='/signin' className='header__signin'>
        Sign in
      </NavLink>
    </header>
  )
}

export default Header;