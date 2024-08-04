import React from 'react'
import './index.scss'
import logoWhite from '../../assets/images/logoWhite.png'

const Footer = () => {
    return (
        <div id='footer'>
            <footer className="bg-black text-white pb-4">
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <img src={logoWhite} alt="Team Acme" className='logoWhite' />
                            <p>702-566-8326</p>
                            <p>680 Professional Ave.<br />Henderson, NV 89015</p>
                            <p>Mon-Fri (8AM - 5PM)<br />Sat-Sun (Closed)</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <ul className="list-unstyled">
                                <li>Auto Glass</li>
                                <li>Wraps</li>
                                <li>Window Tint</li>
                                <li>Paint Protection</li>
                                <li>Side x Side Glass</li>
                                <li>Motorhome Glass</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                            <ul className="list-unstyled">
                                <li>Classic Vehicle Glass</li>
                                <li>Conventions</li>
                                <li>Off Road</li>
                                <li>Store Front Perf</li>
                                <li>Interior Walls & Frosted Glass</li>
                                <li>Vehicle Wrap Care</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3">
                            <ul className="list-unstyled">
                                <li>Blog</li>
                                <li>About Us</li>
                                <li>Purchase Gift Card</li>
                                <li>Warranty Info</li>
                                <li>Terms of Service</li>
                            </ul>
                            <div className="social-icons">
                                <a href="#" className="text-white me-2"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p>Copyright &copy; Team Acme Inc.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
