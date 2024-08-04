import React, { useState } from 'react';
import './index.scss'
import Header from '../../header'
import Footer from '../../footer'
import heroImg from '../../../assets/images/Team-Acme-Window-Tint 1.png'
import img1 from '../../../assets/images/Team-Acme-Window-Tint-Carbon-Video 1.png'
import img2 from '../../../assets/images/Team-Acme-Window-Tint-Ceramic-Video 1.png'
import img3 from '../../../assets/images/Team-Acme-Window-Tint-Nano-IR-Video 1.png'
import popularImg from '../../../assets/images/Team-Acme-Most-Popular 4.png';
import tint1 from '../../../assets/images/Team-Acme-Window-Tint-Removal.png'
import tint2 from '../../../assets/images/Team-Acme-Window-Tint-Panoramic.png'
import tint3 from '../../../assets/images/Team-Acme-Window-Tint-Windshield.png'
import tint4 from '../../../assets/images/Team-Acme-Window-Tint-visor-Glarestrip.png'
import tint5 from '../../../assets/images/Team-Acme-Window-Tint-Moon-roof.png'
import tint6 from '../../../assets/images/Team-Acme-Window-Tint-Gift-Card.png'

const packages = [
    {
        model: 'Example Model',
        options: [
            {
                type: 'CARBON',
                baseprice: 349,
                description: 'Long life, good heat rejection, clarity, and no electronic interference is what has made Carbon the standard for the last decade or so. Now that most cars are full of electronics, you can just throw a bunch of metallic film around and think that the interference isn’t going to be an issue. Carbon is a premium film, and the lowest grade that we install on any customer\'s vehicle. 20+ years has taught us that relationships are the only thing that matters, and any film below the Carbon level is something that Las Vegas does not allow. So make sure your tint last the test of time.',
                img: img1,
                dropdownOptions: [
                    { label: 'Full Vehicle - 4 doors', price: 349 },
                ]
            },
            {
                type: 'CERAMIC',
                baseprice: 449,
                popular: true,
                description: 'Long life, and high heat rejection is the reason everyone is moving to Ceramics. Heat rejection is a lot more linear than metallic and carbon based films. This means that clear ceramic films can keep out more heat than most Limo shades of carbon film. So that means when you get down to the darker shades of ceramic, you are really keeping out some heat. And just like the best qualities of Carbon, they do not interfere with most electronic signals, and are color stable for the long haul.',
                img: img2,
                dropdownOptions: [
                    { label: 'Full Vehicle - 4 doors', price: 449 },
                ]
            },
            {
                type: 'CERAMIC NANO IR',
                baseprice: 849,
                description: 'Ceramic IR (Infrared) window tints for cars offer superior heat rejection by blocking infrared radiation, maintaining a cooler interior, and providing UV protection by blocking up to 99% of harmful rays. These tints ensure excellent clarity and visibility without the haze or reflectiveness of other tints, and they are durable, resisting fading, bubbling, and discoloration. The non-metallic composition prevents interference with electronic devices, and they enhance privacy and aesthetics with various tint levels. Additionally, ceramic IR tints reduce glare, improve shatter resistance for added safety, enhance energy efficiency by lowering air conditioning use.',
                img: img3,
                dropdownOptions: [
                    { label: 'Full Vehicle - 4 doors', price: 849 },
                ]
            }
        ]
    }
];

const packages2 = [
    {
        options: [
            {
                type: 'Tint Removal',
                img: tint1,
                baseprice: 25,
                dropdownOptions: [
                    { label: 'One Window', price: 25 }
                ]
            },

            {
                type: 'Panoramic Roof',
                img: tint2,
                baseprice: 199,
                dropdownOptions: [
                    { label: 'Carbon', price: 199 }
                ]
            },

            {
                type: 'Windshield',
                img: tint3,
                baseprice: 249,
                dropdownOptions: [
                    { label: 'Carbon', price: 249 }
                ]
            },

            {
                type: 'Glare Strip',
                img: tint4,
                baseprice: 49,
                dropdownOptions: [
                    { label: 'One Window', price: 49 }
                ]
            },

            {
                type: 'Moon Roof',
                img: tint5,
                baseprice: 59,
                dropdownOptions: [
                    { label: 'Carbon', price: 59 }
                ]
            },
            {
                type: 'Tint Gift Card',
                img: tint6,
                baseprice: 350,
                dropdownOptions: [
                    { label: 'Carbon', price: 350 }
                ],
                gift: true
            },
        ]
    }
];

const CarPackageCard = ({ type, baseprice, img, popular, dropdownOptions, description, gift }) => {
    const [selectedOption, setSelectedOption] = useState(dropdownOptions[0].label);
    const [price, setPrice] = useState(baseprice);

    const handleSelectChange = (event) => {
        const selected = dropdownOptions.find(option => option.label === event.target.value);
        setSelectedOption(selected.label);
        setPrice(selected.price);
    };

    return (
        <div className={`col-md-4 col-sm-6 mb-4`}>
            <div className={`card ${popular ? 'popularBorder bg-transparent' : 'border-0 simpleBorder bg-transparent'}`}>
                <div>
                    <div className=' position-relative'>
                        {popular && <div className='popular position-absolute'>
                            <img src={popularImg} alt="most popular" />
                        </div>}
                        <img src={img} className="card-img-top w-100" alt={type} />
                    </div>
                    <div className="card-body bg-transparent text-white">
                        <h5 className="card-title">{type}</h5>
                        <p className="card-text display-6 fw-bold">${price}</p>
                        <div className="position-relative">
                            <select className="form-select mb-3 bg-transparent text-white rounded-0 dropdowncss" value={selectedOption} onChange={handleSelectChange}>
                                {dropdownOptions.map((option, index) => (
                                    <option key={index} value={option.label} className={`${index % 2 === 0 ? `bg-gray` : 'bg-black'}`}>{option.label}</option>
                                ))}
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill position-absolute dropdown-icon z-1" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="clamped-description mb-4">
                            {description}
                        </div>
                        <div className={`${gift ? 'gift-button' : 'sch-button'}  text-center mt-2`}>
                            <button className=''>Buy & Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AutoTint = () => {
    return (
        <div id='autoTint'>
            <Header />
            <div>
                <div>
                    <div className="container mt-4 p-0">
                        <img src={heroImg} alt="" className='w-100' />
                    </div>
                    <div className='container bg-gray h4 p-5 fw-normal'>
                        <span className=' fw-bold '>
                            Fleets and Company Vehicles
                        </span>
                        <br />
                        Team Acme in specializes in designing, printing, and installing custom fleet vehicle wraps for companies. Their process begins with a collaborative design phase, where they work closely with clients to create eye-catching and brand-consistent graphics. Once the design is finalized, they utilize advanced printing technology to produce high-quality, vibrant wraps. Their installation team then ensures a professional application on each vehicle, maximizing both visual impact and longevity. Whether for a single vehicle or an entire fleet, Team Acme provides a comprehensive solution that enhances brand visibility on the road to stand out amongst the competition.
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <h1 className="heading">WINDOW TINT PACKAGES</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mt-4">
                    <img src={heroImg} alt="" className='w-100' />
                </div>
                <div className="container mt-5">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`mb-5 bg-black`}>
                            <h2 className="text-center mb-4 heading">{pkg.model}</h2>
                            <div className="row">
                                {pkg.options.map((option, i) => (
                                    <CarPackageCard key={i} {...option} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h1 className="heading">WINDOW TINT ADD On's</h1>
                </div>
            </div>
            <div>
                <div className="container mt-5">
                    {packages2.map((pkg, index) => (
                        <div key={index} className={`mb-5 bg-black`}>
                            <div className="row">
                                {pkg.options.map((option, i) => (
                                    <CarPackageCard key={i} {...option} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AutoTint
