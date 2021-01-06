import React from "react";

import HomeSlider from "../components/home/HomeSlider";
import HomeBlocks from "../components/home/HomeBlocks";

const HomePage = () => {
    return (
        <div className="home">
            <HomeSlider />
            <div className="home-lead spacey col-12">
                <div className="row">
                    <h1 className="home-title">Czym jest Pacjent i Lekarz?</h1>
                </div>
                <div className="row">
                    <HomeBlocks />
                </div>
            </div>
        </div>
    );
};

export default HomePage;