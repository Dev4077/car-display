import React from 'react'
import Header from '../../header'
import Footer from '../../footer'
import './index.scss'
import heroImg from '../../../assets/images/Team-Acme-Commercial-Window-Tint 1.png'
import car1 from "../../../assets/images/Team-Acme-Commercial-Window-Tint-Gold-Spike-Downtown-Las-Vegas.png";
import car2 from "../../../assets/images/Team-Acme-Commercial-Window-Coach-Downtown-Las-Vegas.png";
import car3 from "../../../assets/images/Team-Acme-Commercial-Window-Butler-Tire-Downtown-Las-Vegas.png";
import car4 from "../../../assets/images/Team-Acme-Commercial-Window-CCSD-Downtown-Las-Vegas.png";


const CommercialWindowTint = () => {

    return (
        <div id='Commercial'>
            <Header />
            <div className="container mt-4 position-relative">
                <img src={heroImg} alt="" className='img-fluid' />

            </div>
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h1 className="heading">COMMERCIAL WINDOW TINTING</h1>
                </div>
            </div>
            <div className='locationSec mt-4'>
                <div className="container text-white p-5" style={{ background: '#343434', fontSize: '22px' }}>
                    <div className="row justify-content-center">
                        <div className="px-5">
                            <span className=' fw-bold'>Commercial & Architectural Window Tint
                            </span><br />
                            Adding window tint to your business can significantly reduce energy costs and enhance comfort. By blocking a substantial portion of the sun's heat, window tinting lowers the need for air conditioning, leading to lower electricity bills. Additionally, it reduces glare and improves indoor temperature consistency, creating a more comfortable environment for employees and customers. Over time, this investment can lead to considerable savings and a more pleasant workspace.
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-call container d-flex">
                <button className='mx-auto'>Call to Schedule</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={car1} className='CommercialImg w-100' />
                    </div>
                    <div className="col-4">
                        <img src={car2} className='CommercialImg w-100' />
                    </div>
                    <div className="col-4 ">
                        <img src={car3} className='CommercialImg w-100' />
                    </div>
                </div>
                <div className="mt-4 mx-4 mb-2">
                    <img src={car4} className='CommercialImgMain w-100 ' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CommercialWindowTint
