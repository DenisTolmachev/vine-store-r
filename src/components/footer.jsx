import React from 'react';
import {Link, HashRouter} from 'react-router-dom';
import pone_st from '../img/phone-st.png';
import pone_mob from '../img/phone-mob.png';
import mail from '../img/mail.png';


const Footer = () => (
    <footer>
        <div className="footer-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi nec justo vestibulum auctor. Phasellus sollicitudin diam at feugiat dictum. Cras facilisis lorem metus, et tincidunt magna imperdiet porttitor. Sed magna velit, hendrerit non aliquet quis, posuere dapibus est.</p>
        </div>
        <div className="contacts">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="phone-st">
                        <img src={pone_st} alt=""/>
                            <p>Тел. (061) 271-94-53</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="phone-mob">
                        <img src={pone_mob} alt=""/>
                            <p>Моб. 067-95-92-463</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div className="e-mail">
                        <img className="mail" src={mail} alt=""/>
                            <a href="mailto:Zagorulko_v_v@mail.ru">e-mail: Zagorulko_v_v@mail.ru</a>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar-footer">
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
        <div className="copyright">
            <p>Все права защищены 2016</p>
        </div>

    </footer>
);

export default Footer;