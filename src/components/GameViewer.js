import { Card, CardColumns, Carousel } from 'react-bootstrap';
import { images } from '../images/catalogue.js';

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
        <Carousel controls={false} indicators={false} keyboard={false} pause={false} fade={true} interval={4000}>
            {images.map((image, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img src={image.src} alt={image.alt} style={{height: '120px', width: 'auto'}}/>                        
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}