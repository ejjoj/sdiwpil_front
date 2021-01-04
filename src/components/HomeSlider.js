import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';

import doctor from "../images/doctor.jpg";
import dentist from '../images/dentist.jpg';

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
        title: 'Lorem Ipsum',
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
        $(document).ready(() => {
            if ($home_slider.children().length
                && !$home_slider.hasClass('slick-initialized')) {
                setIsSlicked(true);
                $home_slider
                    .slick({
                        slidesToScroll: 1,
                        slidesToShow: 1
                    });
            }
        });
    };

    useEffect(() => {
       if (!isSlicked)
           initSlider();
    }, [isSlicked]);

    return (
        <div className="home-slider">
            {slider}
        </div>
    );
};

export default HomeSlider;