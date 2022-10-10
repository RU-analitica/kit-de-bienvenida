import React from 'react';
import "./Navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navbar() {
    // get current path and set active class

    const currentPath = window.location.pathname;
    const homeActive = currentPath === "/" ? 'break' : '';

    return(
        <div className="navbar">
            <a href="/" className={`navbar-link ${homeActive}`}><MenuOpenIcon />Regresar al menú</a>
            <a href="https://zeusru.com" className="navbar-link"><SearchIcon />Regresar al Centro de Soluciones</a>
        </div>
    )
}

export { Navbar };