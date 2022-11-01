import React from 'react'
import DATA from '../../data'
import { NavLink } from 'react-router-dom'
import './Product.css';


const Product = () => {

    const mapItem = (product) => {
        return (
            <div className="card my-5 py-4" style={{ width: "18rem" }}>
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="lead">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                    <hr />
                        <h1 className="text-Products">Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container container-main-product">
                <div className="row justify-content-around">
                    {DATA.map(mapItem)}
                </div>
            </div>
        </div>
    )


}

export default Product