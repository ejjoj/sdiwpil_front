import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';
import {slick} from 'slick-carousel';

import doctor from "../../images/doctor.jpg";
import dentist from '../../images/dentist.jpg';

const slides = [
    {
        id: 1,
        anchor: '#',
        image: doctor,
        title: 'Lorem Ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae neque velit. Nullam quis imperdiet massa. Vestibulum ac enim vel arcu vehicula volutpat quis et nibh. Duis at dapibus sem, nec euismod magna. Aliquam imperdiet nulla eu enim tempus aliquet. Pellentesque hendrerit orci sed lorem egestas, interdum luctus nisl hendrerit.'
    },
    {
        id: 2,
        anchor: '#',
        image: dentist,
        title: 'Lorem Ipsum2',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae neque velit. Nullam quis imperdiet massa. Vestibulum ac enim vel arcu vehicula volutpat quis et nibh. Duis at dapibus sem, nec euismod magna. Aliquam imperdiet nulla eu enim tempus aliquet. Pellentesque hendrerit orci sed lorem egestas, interdum luctus nisl hendrerit.'
    }
];

const HomeSlider = () => {
    const [isSlicked, setIsSlicked] = useState(false);

    const slider = slides.map(slide => {
        const {
            id,
            anchor,
            image,
            title,
            excerpt
        } = slide;
        return(
            <div key={id} className="home-slider__slide">
                <figure className="row home-slider__figure">
                    <img className='home-slider__img' src={image} alt="Doctort" title="Doctor"/>
                </figure>
                <Link to={anchor} className="home-slider__content col-lg-5">
                    <strong className="home-slider__title">{title}</strong>
                    <div className="home-slider__excerpt">{excerpt}</div>
                </Link>
            </div>
        );
    });

    const initSlider = () => {
        const $home_slider = $('.home-slider');
        const $home_arrow_prev = $('.arrow-left');
        const $home_arrow_next = $('.arrow-right');
        $(document).ready(() => {
            if ($home_slider.children().length
                && !$home_slider.hasClass('slick-initialized')) {
                setIsSlicked(true);
                $home_slider
                    .slick({
                        speed: 300,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        prevArrow: $home_arrow_prev,
                        nextArrow: $home_arrow_next
                    });
            }
            setIsSlicked(true);
        });
    };

    useEffect(() => {
       if (!isSlicked) {
           initSlider();
       }

    }, [isSlicked]);

    return (
        <div className="home-slider__wrapper">
            <div className="home-slider">
                {slider}
            </div>
            <div className="col-lg-5 home-slider__arrows">
                <div className="arrow arrow-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </div>
                <div className="arrow arrow-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;