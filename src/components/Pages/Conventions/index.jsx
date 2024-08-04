import React from 'react'
import './index.scss'
import Header from '../../header'
import Footer from '../../footer'
import con1 from '../../../assets/images/Team-Acme-Convention-Set-up-Banner 1.png'
import con2 from '../../../assets/images/Team-Acme-Convention-Set-up-Banner-02.png'
import con3 from '../../../assets/images/Team-Acme-Convention-Set-up-Banner-03.png'
import con4 from '../../../assets/images/Team-Acme-Convention-Set-up-Banner-04.png'
import heroImg from '../../../assets/images/Team-Acme-Convention-Set-up-Banner 1.png'

const Convantions = () => {
    return (
        <div id='Convantions'>
            <Header />
            <div>
                <div className="container mt-4 position-relative">
                    <img src={heroImg} alt="" className='w-100' />

                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <h1 className="heading">COMMERCIAL WINDOW TINTING</h1>
                    </div>
                </div>
                <div className='locationSec mt-4'>
                    <div className="container text-white p-5" style={{ background: '#343434', fontSize: '22px', textAlign: 'justify' }}>
                        <div className="row justify-content-center">
                            <div className="px-5">
                                <span className=' fw-bold'>Convention Setups and Tear Downs
                                </span><br />
                                For companies with large scale visual needs, we do installations for them which includes window displays, wall graphics, barricade wraps and more!
                                <br />
                                At Team Acme, we specialize in a wide range of services. This allows us to take on projects that most other graphic shops do not have the experience to handle. We love the chance to learn something new and challenging, that allows us to create a relationship, that makes us the go to for all your Las Vegas project needs. We aim to help visual companies handle visual needs, including installations for large and small roll outs, to meet your needs.
                                <br />
                                <br />
                                <ul>
                                    <li>Window Displays</li>
                                    <li>Wall Graphics</li>
                                    <li>Barricade Wraps</li>
                                    <li>Light Box Visuals</li>
                                    <li>And much more!</li>
                                </ul>
                                <br />
                                <br />
                                We create custom solutions for your needs - one size does not fit all!

                                We also do Convention Services for large events such as SEMA or CES. We have built a reputation for doing quality work on time and at a fair price.

                            </div>
                        </div>
                    </div>
                    <div className="btn-call container d-flex">
                        <button className='mx-auto'>Call to Schedule</button>
                    </div>
                </div>
                <div className="container">
                    <div className="mt-4 mx-4 mb-2">
                        <img src={con1} className='CommercialImgMain w-100 ' />
                    </div>
                    <div className="mt-4 mx-4 mb-2">
                        <img src={con2} className='CommercialImgMain w-100 ' />
                    </div>
                    <div className="mt-4 mx-4 mb-2">
                        <img src={con3} className='CommercialImgMain w-100 ' />
                    </div>
                    <div className="mt-4 mx-4 mb-2">
                        <img src={con4} className='CommercialImgMain w-100 ' />
                    </div>
                    <div className="btn-call container d-flex">
                        <button className='mx-auto'>Call to Schedule</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Convantions
