import React from 'react';
import {Link, HashRouter} from 'react-router-dom'

var SliderNav = React.createClass({
    showLeft: function() {
        this.refs.left.show();
    },

    render: function() {
        return <div>
            <button className="slider-menu-button" onClick={this.showLeft}>Menu</button>
            
            <Menu ref="left" alignment="left">
                <HashRouter>
                    <div className="item">
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/catalog">Каталог</Link></li>
                            <li><Link to="/about_us">О нас</Link></li>
                            <li><Link to="/news">Новости</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>
                </HashRouter>
            </Menu>
            
        </div>;
    }
});

var Menu = React.createClass({
    getInitialState: function() {
        return {
            visible: false
        };
    },

    show: function() {
        this.setState({ visible: true });
        document.addEventListener("click", this.hide.bind(this));
    },

    hide: function() {
        document.removeEventListener("click", this.hide.bind(this));
        this.setState({ visible: false });
    },

    render: function() {
        return <div className="menu">
            <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
        </div>;
    }
});


export default SliderNav;
		
