import React from 'react';
import {Link, HashRouter} from 'react-router-dom'


const Header = () => (
    <div className="header">
        <h2>ХЕДЕР</h2>
        <HashRouter>
            <div>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/about_us">О нас</Link></li>
                    <li><Link to="/news">Новости</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
                <div>
                    <Link to="/cart">Корзина</Link>
                </div>
            </div>
        </HashRouter>
    </div>


);

export default Header;