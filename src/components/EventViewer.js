import { Accordion, Button, Card } from 'react-bootstrap';

const EventViewer = (props) => {
    const { events } = props;

    return (
        <Accordion defaultActiveKey="0">
            {events.map((event,index) => {
                return (
                    <Card key={event.title}>
                        <Card.Header>                            
                            <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                            {event.title} - {event.date} - {event.type}
                            </Accordion.Toggle>                   
                        </Card.Header>
                        <Accordion.Collapse eventKey={index.toString()}>
                            <Card.Body>
                                {event.details}
                                <hr/>
                                <Button variant="outline-primary" href={event.link} target="_blank">More Details</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            })}
        </Accordion>
    )
}

export default EventViewer;