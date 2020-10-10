import { Card, CardDeck } from 'react-bootstrap'

export const Details = (props) => {
    const {entries} = props;

    return (
        <CardDeck>
            { entries.map((entry, index) => {
                return (
                    <DetailCards key={index} entry={entry} />
                );
            })}
        </CardDeck>
    ); 
}

const formatContent = (data) => {
    let formatted = data.join(', ');
    return formatted;
}

const DetailCards = (props) => {
    const {entry} = props;

    return (
        <Card bg="light" text="dark" style={{ width: '18rem' }}>
            <Card.Header>{entry.role}</Card.Header>

            <Card.Body>                
                <Card.Title>{entry.name}</Card.Title>
                {formatContent(entry.content)}
            </Card.Body>
        </Card>
    );
}