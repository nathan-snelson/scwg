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
let placements = sortedDb.slice(0,4);

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center" xs={4} md={6}>

                </Col>

                <Col xs={8} md={6}>
                    <LeagueTable headers={Object.keys(schema)} rows={placements} />
                </Col>
            </Row>
        </Container>        
    )
}

export default Home;