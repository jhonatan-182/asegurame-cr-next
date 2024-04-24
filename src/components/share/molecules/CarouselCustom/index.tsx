'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"



export default function CarouselCustom({children} : any) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    
    return (
        <div className="slider-container">
            <Slider {...settings}>
               {children}
            </Slider>
        </div>
    )
}