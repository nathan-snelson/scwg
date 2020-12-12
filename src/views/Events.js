import { Row, Col, Container } from 'react-bootstrap';

import EventViewer from '../components/EventViewer';
import events from '../data/events.json';

const Event = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <EventViewer events={events}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Event;