import React from 'react';
import './App.css'
import Header from './components/header';
import Routes from './routes';
import Footer from './components/footer';

const App = () => (
    <div>
        <Header />
        <Routes />
        <Footer />
    </div>
);

export default App;