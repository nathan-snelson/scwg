import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import scwglogo from '../scwglogo.svg'

import Home from '../views/Home';
import About from '../views/About';
import Covid from '../views/Covid';
import Standings from '../views/Standings';
import Event from '../views/Events';
import Contact from '../views/Contact';

import { link } from '../styles';

const styles = {
    color: link.color,
    paddingRight: link.padr,
    paddingLeft: link.padl
  }

const TopBar = () => {
    return (
        <Router>
            <div>
            <NavBar bg="dark" variant="dark" styles={{width: '100%'}}>
                <NavBar.Brand>
                <img src={scwglogo} alt="SCWG Logo" height="40" width="40" className="d-inline-block align-top"/>
                </NavBar.Brand>

                <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="link" style={styles} to={'/'}>Home</Link>
                    <Link className="link" style={styles} to={'/about'}>About</Link>
                    <Link className="link" style={styles} to={'/covid'}>Covid-19</Link>
                    <Link className="link" style={styles} to={'/standings'}>Standings</Link>
                    <Link className="link" style={styles} to={'/events'}>Events</Link>
                    <Link className="link" style={styles} to={'/contact'}>Contact</Link>              
                </Nav>
                </NavBar.Collapse>
            </NavBar>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/covid' component={Covid} />
                <Route path='/standings' component={Standings} />
                <Route path='/events' component={Event} />            
                <Route path='/contact' component={Contact} />
            </Switch>
            </div>
        </Router>
    );
}

export default TopBar;