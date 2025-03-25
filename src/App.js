import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </Router>
  );
}

export default App;