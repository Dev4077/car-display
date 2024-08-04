import React from 'react'
import './index.scss'
import MapImg from '../../assets/images/map.png'

const LocationSec = () => {
    return (
        <div className='locationSec'>
            <div className="container text-white p-4" style={{ background: '#343434' }}>
                <div className="text-center mb-4 location">
                    <h1>LOCATION & HOURS</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <img
                            src={MapImg}
                            alt="Map"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="text-center mt-4 Date-Time">
                    <p className="mb-0 ">Store Hours</p>
                    <p className="mb-0">Monday - Friday</p>
                    <p>8am - 5pm</p>
                </div>
            </div>
        </div>
    )
}

export default LocationSec
