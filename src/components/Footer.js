import { Row, Col } from 'react-bootstrap';
import { footer } from '../styles';

const styles = {
    position: footer.position,
    left: footer.left,
    bottom: footer.bottom,
    right: footer.right
}

const containerStyle = {
    "padding-bottom": "60px"
}

export const Footer = () => {
    return (
        <footer className="page-footer font-small pt-4" style={containerStyle}>
            <div className="container-fluid text-center text-md-left" style={styles}>
                <Row>
                    <Col>
                        <h5 className="text-uppercase">Links</h5>
                        
                        <ul className="list-unstyled">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/nathan-snelson/scwg">View source code</a>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-copyright text-center py-3" style={styles}>© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
            </div>
        </footer>
    )
}