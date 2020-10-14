import { Accordion, Button, Card } from 'react-bootstrap';

export const EventViewer = (props) => {
    const { events } = props;

    return (
        <Accordion defaultActiveKey="0">
            {events.map((event) => {
                return (
                    <Card key={event.title}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {event.title} - {event.date} - {event.type}
                            </Accordion.Toggle>                   
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {event.details}
                                <br/>
                                <Button variant="primary" href={event.link} target="_blank">More Details</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })}
        </Accordion>
    )
}