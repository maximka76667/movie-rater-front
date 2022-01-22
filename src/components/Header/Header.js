import './Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className='header'>
      <nav className="header__nav"></nav>
      <Logo />
      <nav className="header__nav">
        <NavLink to="/signup" className='header__link header__link_signup'>
          Sign up
        </NavLink>
        <NavLink to='/signin' className='header__link header__link_signin'>
          Sign in
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;