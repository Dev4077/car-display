import React from 'react'
import './index.scss'
import image1 from '../../assets/images/TA-HOME PAGE-Glass-Repair 1.png'
import image2 from '../../assets/images/TA-HOME PAGE-Wraps 1.png'
import image3 from '../../assets/images/TA-HOME PAGE-Window-Tint 1.png'
import image4 from '../../assets/images/TA-HOME PAGE-Paint-Protection-Film 1.png'
import image5 from '../../assets/images/TA-HOME PAGE-Side-by-Side-Glass-Repair 1.png'
import image6 from '../../assets/images/TA-HOME PAGE-RV-Motorhome-Glass-Repair 1.png'
import image7 from '../../assets/images/TA-HOME PAGE-Classic-Car-Glass-Repair 1.png'
import image8 from '../../assets/images/TA-HOME PAGE-Convention-Setups 1.png'


const ServiceSection = () => {

    const images = [
        { src: image1, text: 'GLASS REPAIR' },
        { src: image2, text: 'WRAPS' },
        { src: image3, text: 'WINDOW TINT' },
        { src: image4, text: 'PAINT PROTECTION' },
        { src: image5, text: 'SXIDE X SIDE GLASS' },
        { src: image6, text: 'MOTORCOACH GLASS' },
        { src: image7, text: 'CLASSIC VEHICLE' },
        { src: image8, text: 'CONVENTIONS' },
    ];

    return (
        <div>
            <div className="container ServiceSection">
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="section-heading">Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {images.map((image, index) => (
                        <div className="col-12 col-md-3 mt-5" key={index}>
                            <div className=' position-relative'>
                                <p className='servies-title position-absolute'>{image.text}</p>
                                <img src={image.src} alt={image.text} className=" w-100" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
