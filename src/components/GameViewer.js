import { Card, CardColumns } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

import w40k_logo from '../images/40k_logo.png';
import aos_logo from '../images/aos_logo.png';
import bolt_action from '../images/bolt_action_logo.png';
import middle_earth from '../images/middle_earth_logo.png';
import dnd_logo from '../images/dnd_logo.png';
import black_powder from '../images/black_powder_logo.png';

const images = [{src: w40k_logo,
                heading: "Warhammer 40k",
                content: "A large Warhammer 40k community."},
                {src: aos_logo,
                heading: "Warhammer AOS",
                content: "A growing Warhammer AOS community."},
                {src: middle_earth,
                heading: "Middle Earth Strategy Battle Game",
                content: "A large Middle Earth SBG community."},
                {src: bolt_action,
                heading: "Bolt Action",
                content: "A growing Bolt Action community."},
                {src: dnd_logo,
                heading: "Dungeons & Dragons",
                content: "A vibrant Dungeons and Dragons community."},
                {src: black_powder,
                heading: "Black Powder",
                content: "A growing Black Powder community."}]

export const GameViewer = () => {
    return (        
        <CardColumns>
            {images.map((image, index) => {
                return (
                    <Card key={index} style={{ height: '12rem'}} border="info">
                        <Card.Body>
                            <Card.Title>{image.heading}</Card.Title>
                            <Card.Text>{image.content}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </CardColumns>
    );
};

export const CarouselView = () => {
    return (
        <Carousel controls={false} indicators={false} keyboard={false}>
            {images.map((image, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img src={image.src} alt="tits" style={{height: '120px', width: 'auto'}}/>                        
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}