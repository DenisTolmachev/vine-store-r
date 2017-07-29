import React from 'react'
import {Route, HashRouter} from 'react-router-dom'
import Main from './pages/main'
import Catalog from './pages/catalog'
import About_us from './pages/about_us'
import NewsApp from './pages/news/news'
import Contacts from './pages/contacts'
import Cart from './pages/cart'


const Routes = () => (
    <HashRouter>
        <div className="main">
            <Route exact path="/" component={Main}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/about_us" component={About_us}/>
            <Route path="/news" component={NewsApp}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/cart" component={Cart}/>
        </div>
    </HashRouter>
);

export default Routes;
