import React, { Component } from 'react';
import {ImagesUrl} from '../libs/url';
import {Carousel} from 'react-bootstrap';
import Slider from "react-slick";

const url = ImagesUrl();
class Slideshow extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: true,
                        centerPadding: '160px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '80px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }
            ]
          };
        const ListSlider = this.props.data.map((s, index) => (
            <div>
                <img
                className="slick-image mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded"
                src={url+s.gambar_slide}
                alt={s.tulisan_slide}
                />
            </div>

        ));
        return (
            <Slider {...settings}>
                {ListSlider}
            </Slider>
        )
    }
}

export default Slideshow