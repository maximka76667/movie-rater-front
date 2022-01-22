import { NavLink } from 'react-router-dom';
import './Logo.css';

function Logo() {
  return (
    <NavLink className="logo" to="/">Rater</NavLink>
  )
}

export default Logo;