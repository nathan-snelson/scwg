import React from 'react';
import './App.css';
import scwglogo from './scwglogo.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Router>
      <div>
        <NavBar bg="dark" variant="dark">
          <NavBar.Brand>
            <img src={scwglogo} alt="SCWG Logo" height="50" width="50" className="d-inline-block align-top"/>
          </NavBar.Brand>

          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="link" to={'/'}>Home</Link>
              <Link className="link" to={'/about'}>About</Link>
              <Link className="link" to={'/profile'}>Profile</Link>
              <Link className="link" to={'/contact'}>Contact</Link>
              <Link className="link" to={'/events'}>Events</Link>
            </Nav>
          </NavBar.Collapse>
        </NavBar>
        <hr />
      </div>
    </Router>
  );
}

export default App;
