import React from 'react'
import './Home.css';
import DATA from '../../data'
import { NavLink } from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="./assets/carousel/absoluts1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./assets/carousel/Freixenet1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/carousel/sky1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./assets/carousel/jager1.jpeg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-featured-products">
                <div className="text-featured-products">
                    <h2>Featured Products</h2>
                </div>
                <div className="info-feature-products">
                    <div className="feature-product feature-product-1">
                        <NavLink to={`/products/${DATA[0].id}`}>
                            <div className="feature-product-img-p">
                                <img src={DATA[0].img} alt={DATA[0].title} />
                                <p>{DATA[0].title}</p>
                            </div>

                        </NavLink>
                    </div>
                    <div className="feature-product feature-product-2">
                        <NavLink to={`/products/${DATA[5].id}`}>
                            <div className="feature-product-img-p">
                                <img src={DATA[5].img} alt={DATA[5].title} />
                                <p>{DATA[5].title}</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="feature-product feature-product-3">
                        <NavLink to={`/products/${DATA[9].id}`}>
                            <div className="feature-product-img-p">
                                <img src={DATA[9].img} alt={DATA[9].title} />
                                <p>{DATA[9].title}</p>
                            </div>
                        </NavLink>

                    </div>
                </div>
                <div>

                </div>
            </div>




        </div>
    )


}

export default Home