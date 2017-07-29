import React from 'react';
import {Link, HashRouter} from 'react-router-dom'

const Footer = () => (
    <div className="footer">
        <h2>ФУТЕР</h2>
        <HashRouter>
            <div>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/about_us">О нас</Link></li>
                    <li><Link to="/news">Новости</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                </ul>
            </div>
        </HashRouter>
    </div>
);

export default Footer;