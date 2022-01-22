import { NavLink } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found__oops">Oops...</p>
      <h1 className="not-found__error-code">404</h1>
      <p className="not-found__message">The requested route was not found</p>
      <NavLink className="not-found__return" to="/">Return</NavLink>
    </main>
  )
}

export default NotFound;