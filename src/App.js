import React from 'react';
import './App.css';
import scwglogo from './scwglogo.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Home from './views/Home';
import Standings from './views/Standings';

function App() {
  return (
    <Router>
      <div>
        <NavBar bg="dark" variant="dark">
          <NavBar.Brand>
            <img src={scwglogo} alt="SCWG Logo" height="40" width="40" className="d-inline-block align-top"/>
          </NavBar.Brand>

          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="link" to={'/'}>Home</Link>
              <Link className="link" to={'/about'}>About</Link>
              <Link className="link" to={'/standings'}>Standings</Link>
              <Link className="link" to={'/events'}>Events</Link>
              <Link className="link" to={'/contact'}>Contact</Link>              
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
          </NavBar.Collapse>
        </NavBar>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/standings' component={Standings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;