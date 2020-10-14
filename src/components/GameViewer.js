import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

import w40k_logo from '../images/40k_logo.png';
import aos_logo from '../images/aos_logo.png';
import bolt_action from '../images/bolt_action_logo.png';
import middle_earth from '../images/middle_earth_logo.png';

const images = [{src: w40k_logo,
                alt: "Warhammer 40k Logo",
                heading: "Warhammer 40k",
                content: "A large Warhammer 40k community."},
                {src: aos_logo,
                alt: "Warhammer AOS Logo",
                heading: "Warhammer AOS",
                content: "A growing Warhammer AOS community."},
                {src: middle_earth,
                alt: "Middle Earth Strategy Battle Game Logo",
                heading: "Middle Earth Strategy Battle Game",
                content: "A large Middle Earth SBG community."},
                {src: bolt_action,
                alt: "Bolt Action Logo",
                heading: "Bolt Action",
                content: "A growing Bolt Action community."}]

export const GameViewer = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (        
        <Carousel activeIndex={index} onSelect={handleSelect} keyboard={false}>
            {images.map((image) => {
                return (
                    <Carousel.Item>
                        <Image src={image.src} alt={image.alt} class="center" rounded fluid/>

                        <Carousel.Caption>
                            <h3>{image.heading}</h3>
                            <p>{image.content}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};