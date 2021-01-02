import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav className='navbar navbar-expand-lg'>
      <Link className="navbar-brand" to='/'>Pacjent i Lekarz</Link>
      <button className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"><i className="bi bi-list"></i></button>
    </nav>
  );
}

export default Header;