import React from 'react'
import './Login.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    return (
        <div className="main-container-login">
            <div className="container-login">
                <button className="btn btn-outline-dark w-100 mb-3">
                    Sign in with Microsoft</button>
                <button className="btn btn-outline-dark w-100 mb-3">
                     <FacebookIcon /> Sign in with Facebook</button>
                <button className="btn btn-outline-dark w-100 mb-5">
                     <GoogleIcon /> Sign in with google</button>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text mb-4">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-outline-dark w-100 mt-5 login-register-button">Submit</button>
                    <button type="button" className="btn btn-outline-dark w-100 ms-1 login-register-button" data-bs-toggle="modal" data-bs-target="#signupModal">Register</button>
                </form>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-outline-dark w-100 mb-3">
                                <span className="fa-brands fa-microsoft me-3"></span> Register with Microsoft</button>
                            <button className="btn btn-outline-dark w-100 mb-3">
                                <span className="fa fa-facebook me-3"></span> Register with Facebook</button>
                            <button className="btn btn-outline-dark w-100 mb-5">
                                <span className="fa fa-google me-3"></span> Register with google</button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text mb-4">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100 mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Login