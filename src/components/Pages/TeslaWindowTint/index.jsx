import React, { useState } from 'react';
import heroImg from '../../../assets/images/Team-Acme-Window-Tint-TESLA 1.png';
import Header from '../../header';
import Footer from '../../footer';
import './index.scss';
import TeslaMX from '../../../assets/images/TA - Window Tint - TESLA-Model-X.png';
import TeslaMY from '../../../assets/images/TA - Window Tint - TESLA-Model-Y.png';
import TeslaM3 from '../../../assets/images/TA - Window Tint - TESLA-Model-3.png';
import TeslaMS from '../../../assets/images/TA - Window Tint - TESLA-Model-S.png';
import popularImg from '../../../assets/images/Team-Acme-Most-Popular 4.png';

const packages = [
    {
        model: 'Tesla Model 3',
        options: [
            {
                type: 'CARBON',
                basePrice: 450,
                img: TeslaM3,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 450 },
                    { label: 'Full Vehicle + Sun Roof', price: 680 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 280 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 980 }
                ]
            },
            {
                type: 'CERAMIC',
                basePrice: 650,
                img: TeslaM3,
                popular: true,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 650 },
                    { label: 'Full Vehicle + Sun Roof', price: 899 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 380 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1200 }
                ]
            },
            {
                type: 'CERAMIC IR',
                basePrice: 950,
                img: TeslaM3,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 950 },
                    { label: 'Full Vehicle + Sun Roof', price: 1200 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 580 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1600 }
                ]
            },
        ],
    },
    {
        model: 'Tesla Model Y',
        options: [
            {
                type: 'CARBON',
                basePrice: 450,
                img: TeslaMY,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 450 },
                    { label: 'Full Vehicle + Sun Roof', price: 680 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 280 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 980 }
                ]
            },
            {
                type: 'CERAMIC',
                basePrice: 650,
                img: TeslaMY,
                popular: true,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 650 },
                    { label: 'Full Vehicle + Sun Roof', price: 899 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 380 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1200 }
                ]
            },
            {
                type: 'CERAMIC IR',
                basePrice: 950,
                img: TeslaMY,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 950 },
                    { label: 'Full Vehicle + Sun Roof', price: 1200 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 580 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1600 }
                ]
            },
        ],
    },
    {
        model: 'Tesla Model X',
        options: [
            {
                type: 'CARBON',
                basePrice: 450,
                img: TeslaMX,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 450 },
                    { label: 'Full Vehicle + Sun Roof', price: 680 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 280 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 980 }
                ]
            },
            {
                type: 'CERAMIC',
                basePrice: 650,
                img: TeslaMX,
                popular: true,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 650 },
                    { label: 'Full Vehicle + Sun Roof', price: 899 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 380 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1200 }
                ]
            },
            {
                type: 'CERAMIC IR',
                basePrice: 950,
                img: TeslaMX,
                dropdownOptions: [
                    { label: 'Full Vehicle', price: 950 },
                    { label: 'Full Vehicle + Sun Roof', price: 1200 },
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 580 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1600 }
                ]
            },
        ],
    },
    {
        model: 'Tesla Model S',
        options: [
            {
                type: 'CARBON',
                basePrice: 450,
                img: TeslaMS,
                dropdownOptions: [
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 280 },
                    { label: 'Full Vehicle', price: 450 },
                    { label: 'Full Vehicle + Sun Roof', price: 680 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 980 }
                ]
            },
            {
                type: 'CERAMIC',
                basePrice: 650,
                img: TeslaMS,
                popular: true,
                dropdownOptions: [
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 380 },
                    { label: 'Full Vehicle', price: 650 },
                    { label: 'Full Vehicle + Sun Roof', price: 899 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1200 }
                ]
            },
            {
                type: 'CERAMIC IR',
                basePrice: 950,
                img: TeslaMS,
                dropdownOptions: [
                    { label: 'Partial Vehicle Rear Doors & Rear Glass', price: 580 },
                    { label: 'Full Vehicle', price: 950 },
                    { label: 'Full Vehicle + Sun Roof', price: 1200 },
                    { label: 'Full Vehicle +Sun Roof + Windshield', price: 1600 }
                ]
            },
        ],
    },
];


const CarPackageCard = ({ type, basePrice, img, popular, dropdownOptions, index }) => {
    const [selectedOption, setSelectedOption] = useState(dropdownOptions[0].label);
    const [price, setPrice] = useState(basePrice);

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
                        <div className='sch-button text-center mt-2'>
                            <button className=''>Buy & Schedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeslaWindowTint = () => {
    return (
        <div id='TeslaWindowTint'>
            <Header />
            <div className="container mt-4">
                <img src={heroImg} alt="" className='w-100' />
            </div>
            <div className="container mt-5">
                {packages.map((pkg, index) => (
                    <div key={index} className={`mb-5 ${index % 2 === 0 ? `bg-black` : 'bg-gray'}`}>
                        <h2 className="text-center mb-4 heading">{pkg.model}</h2>
                        <div className="row">
                            {pkg.options.map((option, i) => (
                                <CarPackageCard key={i} {...option} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default TeslaWindowTint;
