import React from "react";

import './NavLinks.css';

const NavLinks = props => {
    return <header className="nav-links">
        {props.children}
    </header>
};

export default NavLinks;