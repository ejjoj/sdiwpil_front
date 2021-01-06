import React from "react";

import NavItem from "./NavItem";

const items = [
    {
        id: 1,
        name: 'Strona główna',
        path: '/',
        exact: true
    },
    {
        id: 2,
        name: 'Panel lekarza',
        path: '/lekarz',
        exact: true
    },
    {
        id: 3,
        name: 'Panel pacjenta',
        path: '/pacjent',
        exact: true
    },
    {
        id: 4,
        name: 'O aplikacji',
        path: '/o-aplikacji',
        exact: true
    }
];

const NavList = () => {
    const menu = items.map(item => {
       const {id, name, path, exact} = item;
       return (
         <NavItem
            key={id}
            name={name}
            path={path}
            exact={exact}
         />
       );
    });

    return (
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">{menu}</ul>
        </div>
    );
};

export default NavList;