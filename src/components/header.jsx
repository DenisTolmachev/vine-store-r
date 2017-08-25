import React from 'react';
import {Link, HashRouter} from 'react-router-dom'
import cart from '../img/cart.png';
import SliderNav from '../components/sliding-menu'


const Header = () => (
    <header>
        <div className="nav-field">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-6">
                    <nav className="navbar-header">
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
                    </nav>
                    <div id="sliding-menu">
                        <SliderNav />
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                    <div className="register-box">
                        <div className="cart">
                            <HashRouter>
                                <Link to="/cart"><img src={cart} alt=""/></Link>
                            </HashRouter>
                        </div>
                        <div className="buttons" id="reg-buttons">

                                <button>вход</button>
                                <button>регистрация</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-circle">
            <p>авторские селекционные формы и сорта винограда</p>
        </div>
    </header>
);

export default Header;


