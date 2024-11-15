import React from 'react'
import { Link } from 'react-router-dom'

function consultation8(formData) {
    return (
        <div>
            <div className="thankyouPage">
                <div className="position-absolute w-100">
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-md-12 text-center"><Link to="/" className="loginLogo"><img src="assets/images/amuma-main-logo.svg" alt="" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="container vh-100 d-flex align-items-center justify-content-center">
                    <div className="consultationContent text-center">
                        <h2>Thank you {formData?.formData?.name}</h2>
                        <p>We'll get in touch.</p>
                        <Link to="/" className="btn btn-secondary">www.amuma.com</Link>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default consultation8