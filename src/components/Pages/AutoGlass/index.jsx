import React from 'react'
import Header from '../../header'
import Footer from '../../footer'
import heroImg from '../../../assets/images/TA-Auto-Glass-header 1.png'
import autoRepair from '../../../assets/images/TA-Auto-Glass-Repairs 1.png'
import autoRepair2 from '../../../assets/images/TA-Rock-Chip-Repairs 1.png'
import './index.scss'

const AutoGlass = () => {
    return (
        <div id='autoGlass'>
            <Header />
            <div>
                <div className="container mt-4 position-relative">
                    <img src={heroImg} alt="" className='img-fluid' />
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <h1 className="heading">Automotive glass</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className="mt-4 mx-4 mb-2 ">
                        <img src={autoRepair} className='CommercialImgMain w-100 ' />
                    </div>
                    <div className="btn-call container d-flex">
                        <button className='mx-auto'>Call to Schedule</button>
                    </div>
                </div>
                <div className="container text-white p-5" style={{ background: '#343434', fontSize: '22px', textAlign: 'justify' }}>
                    <div className="row justify-content-center">
                        <div className="px-5">
                            <span className=' fw-bold'>ADAS
                            </span><br />
                            ADAS calibration (and re-calibration) is the precise physical alignment, testing, and electronic aiming of sensors that collect data to inform your vehicle’s advanced driver assistance systems (ADAS). Some of these features include: Adaptive Cruise Control, Forward Collision Warning (FCW), Adaptive Cruise Control,  Lane Departure Warning (LDW), Blind Spot Monitoring,  Autonomous Valet Parking, Night Vision, Autonomous Driving, as some examples. Every year these benefits become a bigger part of the vehicle, and must be re-calibrated every time a piece or part of the system is moved, or replaced, without exception.
                            <br />
                            <br />
                            <span className=' fw-bold'>Windshield Replacement
                            </span><br />
                            The most important window on a vehicle is the windshield. The front glass is up to 60% of your vehicle’s structural strength (roof crush and roll over ratings) and part of the safety restraint system (air bag deflection). This makes the use of an AGRSS (Auto Glass Safety Council) certified shop extremely important when replacement of the windshield is required. We are proud to have the only AGRSS Master Certified Tech in Nevada on our team.
                            <br />
                            <br />
                            No short cuts are taken. All parts surrounding the windshield that must be removed in order to replace the windshield to the AGRSS standard will be done as such. This ensures that proper fit, adhesion, and safety standards are met. In-shop replacement is the preferred method, due to heat and other elements that can affect the adhesives, although we do offer mobile installation if you can’t make it to us.
                            <br />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <h1 className="heading">Rock chip repairs</h1>
                    </div>
                </div><div className='container'>
                    <div className="mt-4 mx-4 mb-2 ">
                        <img src={autoRepair2} className='CommercialImgMain w-100 ' />
                    </div>
                    <div className="container text-white p-5 mt-5" style={{ background: '#343434', fontSize: '22px', textAlign: 'justify' }}>
                        <div className="row justify-content-center">
                            <div className="px-5">
                                <span className=' fw-bold'>Windshield Rock Chip Repair
                                </span><br />
                                For as little as $75, you can have your chip or crack repaired, which is far less expensive than replacing the glass in its entirety. Especially if you have ADAS systems that might need re-calibrated. Just call your insurance company to see if your deductible will be waived, then tell them that Team Acme Inc. in Henderson 702-566-8326 will be doing the repair and they will dispatch a free insurance claim to our shop. It doesn’t get any cheaper than free!
                                <br />
                            </div>
                        </div>
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

export default AutoGlass
