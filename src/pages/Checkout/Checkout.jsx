import React from 'react'
import { useParams } from 'react-router'
import DATA from '../../data'
import './Checkout.css';
import { Button, Grid, TextField, Typography } from "@mui/material";


const Checkout = () => {

    const productId = useParams()
    const productDetail = DATA.filter(p => p.id == productId.id)
    const product = productDetail[0]


    const variantType = "filled";


    function formatD() {
        let today = new Date;
        let mes = today.getMonth() + 1;

        return `${today.getFullYear()}-${("0" + mes).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
    }


    return (<Grid container spacing={2} className="checkout">
        <Grid item xs={12}>
        <hr />
           <h1 className="payment-main-page">Payment</h1>
        <hr />
        </Grid>
        <Grid item sx={{}} xs={12} md={8} lg={9}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <span>Personal Information</span>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Name"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Last Name"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Document Number"
                                type="tel" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Telephone number"
                                type="tel" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="E-mail"
                                type="email" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Address"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Number"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} sm={3} md={2}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Complement"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Zip code"
                                type="tel" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="District"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="City"
                                type="text" />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="State"
                                type="text" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <span>Payment details</span>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Name printed on credit card"
                                type="text" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Credit card number"
                                type="tel" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Security code"
                                size="small"
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                variant={variantType}
                                label="Due date"
                                size="small"
                                type="date"
                                value={formatD()}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>SELECT DE PARCELAS</Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} className="order-detail">
                    <div>
                        <Typography variant="h6" component="h6">Purchase details</Typography>
                        <ul>
                            {product.id[0]}
                        </ul>
                        <hr />
                        <ul>
                            <li>
                                <img className="product-checkout-img" src={product.img} alt="" />
                            </li>
                            <li>
                                <span>{product.title}</span>

                            </li>
                            <li>
                                <span>
                                    <strong>Total price: $ {product.price}</strong></span>
                            </li>
 
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button className="button-pay" variant="contained" fullWidth>Pay</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )

}


export default Checkout