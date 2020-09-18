import React from 'react';

import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="page-footer font-small pt-4">
            <div className="container-fluid text-center text-md-left">
                <Row>
                    <Col>
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>There is some text here yes?</p>
                    </Col>

                    <Col>
                        <h5 className="text-uppercase">Links</h5>
                        
                        <ul className="list-unstyled">
                            <li>
                                <i className="fab fa-github"></i>
                                <a href="https://github.com/nathan-snelson/scwg">View source code</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
        </footer>
    )
}

export default Footer;