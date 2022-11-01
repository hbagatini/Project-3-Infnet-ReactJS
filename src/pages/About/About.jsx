import React from 'react'
import { NavLink } from 'react-router-dom'
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container-about-us">
                <div className="row-about-us">
                    <div className="about-us-container">
                        <div className="img-about-us">
                            <hr />
                            <h1 className="text-Products">About Us</h1>
                            <hr />
                        </div>
                        <p className="about-us-text-p">
                            We are proud to sell one of the best alcohol drinks in the world, with the best price of the market. Absolut, Ciroc, Freixenet and others.
                            We’re here to celebrate your choice and your spirit, whether you choose not to booze for a day, week or forever. We want to foster inclusion, social connection and fun to include everyone, whether or not you choose to drink.
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )


}

export default About