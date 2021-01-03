import {Link} from 'react-router-dom';

import NavList from "./NavList";

const Header = () => {
  return(
    <nav className='navbar navbar-expand-lg'>
      <Link className="navbar-brand" to='/'>Pacjent i Lekarz</Link>
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"><i className="bi bi-list"></i></button>
        <NavList />
        <Link rel="stylesheet" to="#" className="btn btn-primary nav-button">Kontakt</Link>
    </nav>
  );
}

export default Header;