import { text } from '../styles';
import { Row, Col, Container } from 'react-bootstrap';

const styles = {
    fontSize: text.fontSize
}

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="text-center">
                    <h2 className="text-uppercase">Welcome!</h2>
                    <p style={styles}>
                        This is the official website of the Steel City Wargaming club, a friendly club that plays a wide variety of game systems. Anyone is welcome to come down to a club night or any other events the club hosts! Please have a look around the website and check the Contact page for details on how to find the club and other important information.
                    </p>
                </Col>
            </Row>
        </Container>        
    )
}

export default Home;