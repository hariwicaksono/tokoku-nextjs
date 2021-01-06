import React, { Component } from 'react';
import {ImagesUrl} from '../libs/url';
import {Carousel} from 'react-bootstrap';

const url = ImagesUrl();
class Slideshow extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        const ListSlideshow = this.props.data.map((s, index) => (
            <Carousel.Item key={index} style={{ position: "relative" }} >
                <img
                className="rounded d-block w-100"
                src={url+s.gambar_slide}
                alt={s.tulisan_slide}
                />
            </Carousel.Item>

        ))
        return (
            <Carousel className="py-3">
                {ListSlideshow}
            </Carousel>
        )
    }
}

export default Slideshow