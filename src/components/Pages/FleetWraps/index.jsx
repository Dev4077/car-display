import React from 'react'
import Header from '../../header'
import Footer from '../../footer'
import heroImg from '../../../assets/images/Team-Acme-FLEET-Vehicle-Wraps 1.png'
import './index.scss'
import "swiper/css";
import "swiper/css/pagination";
import fleet1 from "../../../assets/images/fleet1.png";
import fleet2 from "../../../assets/images/fleet2.png";
import fleet3 from "../../../assets/images/fleet3.png";
import fleet4 from "../../../assets/images/fleet4.png";
import fleet5 from "../../../assets/images/fleet5.png";
import fleet6 from "../../../assets/images/fleet6.png";
import fleet7 from "../../../assets/images/fleet7.png";
import fleet8 from "../../../assets/images/fleet8.png";
import fleet9 from "../../../assets/images/fleet9.png";
import fleet10 from "../../../assets/images/fleet10.png";
import fleet11 from "../../../assets/images/fleet11.png";
import fleet13 from "../../../assets/images/fleet12.png";
import fleet12 from "../../../assets/images/fleet13.png";
import fleet14 from "../../../assets/images/fleet14.png";
import fleet15 from "../../../assets/images/fleet15.png";
import fleet16 from "../../../assets/images/fleet16.png";
import fleet17 from "../../../assets/images/fleet17.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const FleetWraps = () => {

    const sliderImages = [fleet1, fleet2, fleet3, fleet4, fleet5, fleet6, fleet7, fleet8, fleet9, fleet10, fleet11, fleet12, fleet13, fleet14, fleet15, fleet16, fleet17];

    return (
        <div id='fleetWraps'>
            <Header />
            <div>
                <div className="container mt-4 p-0">
                    <img src={heroImg} alt="" className=' img-fluid' />
                </div>
                <div className='container bg-gray h4 p-5 fw-normal'>
                    <span className=' fw-bold '>
                        Fleets and Company Vehicles
                    </span>
                    <br />
                    Team Acme in specializes in designing, printing, and installing custom fleet vehicle wraps for companies. Their process begins with a collaborative design phase, where they work closely with clients to create eye-catching and brand-consistent graphics. Once the design is finalized, they utilize advanced printing technology to produce high-quality, vibrant wraps. Their installation team then ensures a professional application on each vehicle, maximizing both visual impact and longevity. Whether for a single vehicle or an entire fleet, Team Acme provides a comprehensive solution that enhances brand visibility on the road to stand out amongst the competition.
                </div>
            </div>
            <div>
                <div className="row mt-4">
                    <div className="col-md-12 text-center">
                        <h1 className="heading">COMPANY FLEETS</h1>
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
            </div>
            <Footer />
        </div>
    )
}

export default FleetWraps
