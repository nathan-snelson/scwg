import { Row, Col, Container } from 'react-bootstrap';

import Guideline from '../components/Guidelines';

const Covid = () => {
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

export default Covid;