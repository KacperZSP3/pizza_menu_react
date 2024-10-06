import React from 'react';
import logo from "./logo.svg";
import './Menu.css'

const Menu = () => {
    return (
        <main>
            <section id="promotions">
                <h2>Promotions</h2>
                <div className="promo-item">
                    <img src={logo} alt="Pizza Promo" className="menu-img"/>
                    <p>Zestaw pizza + napój - 15%</p>
                    <p className="description">Kup pizzę 42cm, dobierz napój i odbierz -15% rabatu na cały zestaw.</p>
                </div>
            </section>

            <section id="pizza">
                <h2>Pizza</h2>
                <div className="menu-item">
                    <img src={logo} alt="Margherita" className="menu-img"/>
                    <p>Margherita - 22.00 PLN</p>
                </div>
                <div className="menu-item">
                    <img src={logo} alt="Capricciosa" className="menu-img"/>
                    <p>Capricciosa - 25.00 PLN</p>
                </div>
            </section>

            <section id="starters">
                <h2>Starters</h2>
                <div className="menu-item">
                    <img src={logo} alt="Garlic Bread" className="menu-img"/>
                    <p>Garlic Bread - 10.00 PLN</p>
                </div>
            </section>

            <section id="salads">
                <h2>Salads</h2>
                <div className="menu-item">
                    <img src={logo} alt="Caesar Salad" className="menu-img"/>
                    <p>Caesar Salad - 18.00 PLN</p>
                </div>
            </section>

            <section id="burgers">
                <h2>Burgers</h2>
                <div className="menu-item">
                    <img src={logo} alt="Classic Burger" className="menu-img"/>
                    <p>Classic Burger - 30.00 PLN</p>
                </div>
            </section>
        </main>
    );
}

export default Menu;