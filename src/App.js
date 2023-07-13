import React from 'react';
import Navbar from './components';
import Home from './home';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import "./App.css";
import { Bars } from './components/NavbarElements';


function App() {
    return (
        <Router>
            <Navbar />
            <Bars />
            <Home />
        </Router>
    );
}
 
export default App;

