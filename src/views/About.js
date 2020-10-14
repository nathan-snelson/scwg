import { Row, Col, Container } from 'react-bootstrap';

import { GameViewer } from '../components/GameViewer';

export const About = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <GameViewer />
                </Col>
            </Row>
        </Container>
    )
}