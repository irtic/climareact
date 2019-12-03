import React from 'react';

function Header({titulo}) {
    return (
        <nav className="naw-wrapper light-blue darken-2">
            <a href="#!" className="brand-logo">{titulo}</a>
        </nav>
    );
}

export default Header;