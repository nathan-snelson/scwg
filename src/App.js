import './App.css';
import scwglogo from './scwglogo.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from './views/Home';
import Standings from './views/Standings';
import Contact from './views/Contact';

import { link } from './styles';

//import Footer from './components/Footer';

const styles = {
  "color": link.color,
  "padding-right": link.padr,
  "padding-left": link.padl
}

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar bg="dark" variant="dark">
            <NavBar.Brand>
              <img src={scwglogo} alt="SCWG Logo" height="40" width="40" className="d-inline-block align-top"/>
            </NavBar.Brand>

            <NavBar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="link" style={styles} to={'/'}>Home</Link>
                <Link className="link" style={styles} to={'/about'}>About</Link>
                <Link className="link" style={styles} to={'/standings'}>Standings</Link>
                <Link className="link" style={styles} to={'/events'}>Events</Link>
                <Link className="link" style={styles} to={'/contact'}>Contact</Link>              
              </Nav>
            </NavBar.Collapse>
          </NavBar>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/standings' component={Standings} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>    
  );
}

export default App;