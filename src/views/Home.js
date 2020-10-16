import { LeagueTable } from '../components/LeagueTable';

import db from '../data/db.json';
import schema from '../data/schema.json';

import { text } from '../styles';

import { Row, Col, Container } from 'react-bootstrap';

const styles = {
    fontSize: text.fontSize
}

let sortedDb = db.sort((a,b) => {
    if(a.points > b.points) {
        return -1;
    }
    if(a.points < b.points) {
        return 1;
    }
    return 0;
});
let placements = sortedDb.slice(0,5);

export const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h2 className="text-uppercase">Welcome!</h2>
                    <p style={styles}>
                        This is the official website of the Steel City Wargaming club, a friendly club that plays a wide variety of game systems. All are welcome to come down to a club night or any other events the club hosts! Please have a look around the website and check the Contact page for details on how to find the club and other important information.
                    </p>
                </Col>

                <Col xs={8} md={6}>
                    <h2 className="text-uppercase text-center">Top 5 - 40k League</h2>
                    <LeagueTable headers={Object.keys(schema)} rows={placements} />
                </Col>
            </Row>
        </Container>        
    )
}