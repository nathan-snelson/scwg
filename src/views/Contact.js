import { Row, Col, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h2 className="text-uppercase">Contact Details</h2>
                    <p>
                        Some contact details will be displayed here for key members of the club!
                    </p>
                </Col>

                <Col xs={8} md={6}>
                    <h2 className="text-uppercase text-center">Directions</h2>            
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.06053799723!2d-1.373167283565121!3d53.36007148138325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48799da0145ec30b%3A0x9d2517f1c5d355eb!2sSt%20James%20Church%2C%20Woodhouse!5e0!3m2!1sen!2suk!4v1601111855787!5m2!1sen!2suk" 
                        width="900"
                        height="450"
                        frameborder="0"
                        style={{border:"none", alignContent:"center"}}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        title="iFrame example">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;