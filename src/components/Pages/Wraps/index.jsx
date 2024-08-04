import React from 'react'
import Header from '../../header'
import Footer from '../../footer'
import heroImg from '../../../assets/images/Team-Acme-FLEET-Vehicle-Wraps 1.png'
import './index.scss'
import "swiper/css";
import "swiper/css/pagination";
import WrapsSlide1 from "../../../assets/images/Wraps-Portfolio-Slider-01 1.png";
import WrapsSlide2 from "../../../assets/images/Wraps-Portfolio-Slider-02 1.png";
import WrapsSlide3 from "../../../assets/images/Wraps-Portfolio-Slider-03 1.png";
import WrapsSlide4 from "../../../assets/images/Wraps-Portfolio-Slider-04 1.png";
import WrapsSlide5 from "../../../assets/images/Wraps-Portfolio-Slider-05 1.png";
import WrapsSlide6 from "../../../assets/images/Wraps-Portfolio-Slider-06 1.png";
import WrapsSlide7 from "../../../assets/images/Wraps-Portfolio-Slider-07 1.png";
import WrapsSlide8 from "../../../assets/images/Wraps-Portfolio-Slider-08 1.png";
import WrapsSlide9 from "../../../assets/images/Wraps-Portfolio-Slider-09 1.png";
import WrapsSlide10 from "../../../assets/images/Wraps-Portfolio-Slider-10 1.png";
import WrapsSlide11 from "../../../assets/images/Wraps-Portfolio-Slider-11 1.png";
import WrapsSlide13 from "../../../assets/images/Wraps-Portfolio-Slider-12 1.png";
import WrapsSlide12 from "../../../assets/images/Wraps-Portfolio-Slider-13 1.png";
import WrapsSlide14 from "../../../assets/images/Wraps-Portfolio-Slider-14 1.png";
import WrapsSlide15 from "../../../assets/images/Wraps-Portfolio-Slider-15 1.png";
import WrapsSlide16 from "../../../assets/images/Wraps-Portfolio-Slider-16 1.png";
import WrapsSlide17 from "../../../assets/images/Wraps-Portfolio-Slider-17 1.png";
import WrapsSlide18 from "../../../assets/images/Wraps-Portfolio-Slider-18 1.png";
import WrapsSlide19 from "../../../assets/images/Wraps-Portfolio-Slider-19 1.png";
import WrapsSlide20 from "../../../assets/images/Wraps-Portfolio-Slider-20 1.png";
import WrapsSlide21 from "../../../assets/images/Wraps-Portfolio-Slider-21 1.png";
import WrapsSlide22 from "../../../assets/images/Wraps-Portfolio-Slider-22 1.png";
import WrapsSlide23 from "../../../assets/images/Wraps-Portfolio-Slider-23 1.png";
import WrapsSlide24 from "../../../assets/images/Wraps-Portfolio-Slider-24 1.png";
import WrapsSlide25 from "../../../assets/images/Wraps-Portfolio-Slider-25 1.png";
import WrapsRemove from "../../../assets/images/Team-Acme-Wrap-Removal 1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Wraps = () => {

    const sliderImages = [WrapsSlide1, WrapsSlide2, WrapsSlide3, WrapsSlide4, WrapsSlide5, WrapsSlide6, WrapsSlide7, WrapsSlide8, WrapsSlide9, WrapsSlide10, WrapsSlide11, WrapsSlide12, WrapsSlide13, WrapsSlide14, WrapsSlide15, WrapsSlide16, WrapsSlide17, WrapsSlide18, WrapsSlide19, WrapsSlide20, WrapsSlide21, WrapsSlide22, WrapsSlide23, WrapsSlide24, WrapsSlide25];

    return (
        <div id='Wraps'>
            <Header />
            <div>
                <div className="container mt-4 p-0">
                    <img src={heroImg} alt="" className=' img-fluid' />
                </div>
                <div className='container bg-gray h4 p-5 fw-normal'>
                    <span className=' fw-bold '>
                        Vehicle Wraps and Graphics
                    </span>
                    <br />
                    Team Acme in Las Vegas specializes in designing, printing, and installing eye-catching vehicle wraps that can significantly enhance your business's visibility and brand recognition. Utilizing high-quality materials and state-of-the-art printing technology, their expert team collaborates with you to create custom designs that reflect your brand’s identity. Once the design is finalized, they print and install the wrap to ensure a flawless finish. Whether you need a full vehicle wrap or partial graphics, Team Acme's professional services guarantee an attractive result that effectively transforms your vehicle into a mobile advertisement, helping to attract new customers and grow your business.
                </div>
            </div>
            <div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <h1 className="heading">Vehicle Wraps</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='my-4 mySwiper'>
                        <Swiper
                            pagination={true}
                            autoplay={true}
                            loop={true}
                            modules={[Pagination, Autoplay]}
                            slidesPerView={1}
                        >
                            {sliderImages.map((image, i) => (
                                <SwiperSlide key={i}>
                                    <div className="fleetousel-item active">
                                        <img src={image} className="d-block w-100" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='wrap-removals bg-gray removeWrap'>
                    <div className='heading text-center display-5 pt-4'>
                        Wrap Removals
                    </div>
                    <div className='d-flex '>
                        <img src={WrapsRemove} alt="WrapsRemove" className='py-4 ps-5 img-fluid' />
                        <div className='py-4 px-5 display-6 fw-medium'>
                            Removals are priced by the hour. Some are more diffcult than other depending on how long they have been on the vechicle. Vehicles wraps here in the state of Nevada typically last 2-3years before you start to see the signs of burning and discoloration.
                        </div>
                    </div>
                </div>
                <div className="btn-read-more container d-flex">
                    <button className='mx-auto'>Call to Schedule</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wraps
