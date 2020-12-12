import { Row, Col, Container } from 'react-bootstrap';

import { GameViewer, CarouselView } from '../components/GameViewer';

export const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h2 className="text-uppercase text-center">We Play</h2>
                    <CarouselView />
                    <hr />
                    <GameViewer />
                </Col>
            </Row>
        </Container>
    )
}

export default About