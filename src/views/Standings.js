import React from 'react';
import LeagueTable from '../components/LeagueTable';

import db from '../data/db.json';
import schema from '../data/schema.json';

import { Row, Col, Container } from 'react-bootstrap';

let sortedDb = db.sort((a,b) => {
    if(a.points > b.points) {
        return -1;
    }
    if(a.points < b.points) {
        return 1;
    }
    return 0;
});

let addIndex = (data) => {
    for(let i = 0; i < data.length; i++) {
        data[i].index = i + 1;
    }
    return data;
}

let formatted = addIndex(sortedDb);

const Standings = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <LeagueTable headers={Object.keys(schema)} rows={formatted} />
                </Col>
            </Row>
        </Container>        
    )
}

export default Standings;