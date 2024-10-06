import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#promotions">Promotions</a></li>
                    <li><a href="#pizza">Pizza</a></li>
                    <li><a href="#starters">Starters</a></li>
                    <li><a href="#salads">Salads</a></li>
                    <li><a href="#burgers">Burgers</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
