import React from "react";
import {Link} from 'react-router-dom';

import doctor from '../images/doctor.jpg';

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-slider">
                <div className="home-slider__slide">
                    <figure className="row home-slider__figure">
                        <img className='home-slider__img' src={doctor} alt="Doctort" title="Doctor"/>
                    </figure>
                    <Link to="#" className="home-slider__content col-lg-9">
                        <strong className="home-slider__title">Lorem Ipsum</strong>
                        <div className="home-slider__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae neque velit. Nullam quis imperdiet massa. Vestibulum ac enim vel arcu vehicula volutpat quis et nibh. Duis at dapibus sem, nec euismod magna. Aliquam imperdiet nulla eu enim tempus aliquet. Pellentesque hendrerit orci sed lorem egestas, interdum luctus nisl hendrerit.</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;