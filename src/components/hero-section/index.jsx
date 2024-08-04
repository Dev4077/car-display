import React from "react";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import car1 from "../../assets/images/car-1.jpg";
import car2 from "../../assets/images/car-2.jpg";
import car3 from "../../assets/images/car-3.jpg";
import car4 from "../../assets/images/car-4.jpg";
import car5 from "../../assets/images/car-5.jpg";
import car6 from "../../assets/images/car-6.jpg";
import car7 from "../../assets/images/car-7.jpg";
import car8 from "../../assets/images/car-8.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {

  const sliderImages = [car1, car2, car3, car4, car5, car6, car7, car8];
  return (
    <div id="main-section">
      <div className="hero-container">
        <div className="mt-5" id="hero-section">
          <div>
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
      </div>
    </div>
  );
}
