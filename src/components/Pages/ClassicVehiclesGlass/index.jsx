import React from 'react'
import Header from '../../header'
import Footer from '../../footer'
import './index.scss'
import heroImg from '../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair 1.png'
import "swiper/css";
import "swiper/css/pagination";
import car1 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-01.png";
import car2 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-02.png";
import car3 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-03.png";
import car4 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-04.png";
import car5 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-05.png";
import car6 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-06.png";
import car7 from "../../../assets/images/Team-Acme-Classic-Vehicle-Glass-repair-Slider-07.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


const ClassicVehiclesGlass = () => {

    const sliderImages = [car1, car2, car3, car4, car5, car6, car7];

    return (
        <div id='classic'>
            <Header />
            <div className="container mt-4 position-relative">
                <img src={heroImg} alt="" className='img-fluid' />
                <div className="sch-button position-absolute">
                    <button>
                        SCHEDULE TODAY
                    </button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h1 className="heading">Classic Vehicle Glass Cutting</h1>
                </div>
            </div>
            <div className='locationSec mt-4'>
                <div className="container text-white p-5" style={{ background: '#343434', fontSize: '22px' }}>
                    <div className="row justify-content-center">
                        <div className="px-5">
                            <span className=' fw-bold'>Classic Vehicles</span><br />
                            This is a special kind of glass replacement that involves laminated glass. Laminated glass consists of two flat glass pieces that are fit together using a polymer bond. Once bonded, the glass is cut to the proper shape and size to fit a particular application. This includes heavy equipment, box trucks, antique car doors, and flat windshields, or any other vehicles that use flat automotive glass.
                            <br />
                            <br />
                            After replacing and restoring auto glass on various classic cars, hot rods, and specialty vehicles, we recognize how different the needs of each vehicle truly are. This is why we offer custom auto glass fabrication for vehicle owners who need something out of the ordinary. Whether for a classic car, a hot rod, or a completely custom project, we have all the tools and skills necessary to restore or replace your auto glass.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5" id="hero-section">
                <div className='container'>
                    <Swiper
                        pagination={true}
                        autoplay={true}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                    >
                        {sliderImages.map((image, i) => (
                            <SwiperSlide key={i}>
                                <div className="carousel-item active">
                                    <img src={image} className="d-block w-100" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="btn-call container d-flex">
                <button className='mx-auto'>Call to Schedule</button>
            </div>
            <Footer />
        </div>
    )
}

export default ClassicVehiclesGlass
