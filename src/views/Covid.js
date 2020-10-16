import { Row, Col, Container } from 'react-bootstrap';

import { Guideline } from '../components/Guidelines';

export const Covid = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <Guideline />
                </Col>
            </Row>
        </Container>
    )
}