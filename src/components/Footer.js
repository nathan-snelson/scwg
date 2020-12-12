import { Row, Col, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

import { footer } from '../styles';

const styles = {
    position: footer.position,
    left: footer.left,
    bottom: footer.bottom,
    right: footer.right,
    backgroundColor: footer.background,
    color: footer.color,
    height: footer.height
}

const Footer = () => {
    return (
        <footer color="unique-color-dark" className="font-small pt-4 mt-4" style={styles}>
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                        </p>
                    </Col>
                    <Col md="6">
                        <h5 className="title">Useful Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            <FontAwesomeIcon icon={faFacebook}/><a href="https://www.facebook.com/groups/steelcitywargaming"> SCWG Group  </a>
                        </li>
                        <li className="list-unstyled">
                            <FontAwesomeIcon icon={faTwitter}/><a href="https://twitter.com/SCWFrontLine"> SCWargamer </a>
                        </li>
                        <li className="list-unstyled">
                            <FontAwesomeIcon icon={faInstagram}/><a href="https://www.instagram.com/steelcity_wargaming_/?hl=en"> steelcity_wargaming_ </a>
                        </li>
                        <li className="list-unstyled">
                            <FontAwesomeIcon icon={faGithub}/><a href="https://github.com/nathan-snelson/scwg"> nathan-snelson </a>
                        </li>
                        </ul>
                    </Col>
                </Row>                
            </Container>
        </footer>
    );
}

export default Footer;