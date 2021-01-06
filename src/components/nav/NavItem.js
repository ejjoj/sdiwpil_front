import React from "react";
import {NavLink} from "react-router-dom";



const NavItem = props => {
    const {name, path, exact} = props;

    return (
      <li className={`nav-item`}>
        <NavLink
            className='nav-link'
            to={path}
            exact={exact}>
            {name}
        </NavLink>
      </li>
    );
}

export default NavItem;