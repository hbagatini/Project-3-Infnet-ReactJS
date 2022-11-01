import React from 'react'
import { useParams } from 'react-router'
import DATA from '../../data'
import { NavLink } from 'react-router-dom'
import '../ProductDetails/ProductDetails.css';


const ProductDetails = () => {

    const productId = useParams()
    const productDetail = DATA.filter(p => p.id == productId.id)
    const product = productDetail[0]


    return (
        <>
            <div className="container">
                <div className="main-container">
                    <div className="product-img">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h1>{product.title}</h1>
                        <hr />
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                        <NavLink to={`/checkout/${product.id}`}><button className="btn btn-outline-dark">Buy it now!</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductDetails