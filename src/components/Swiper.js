import React from "react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "./swipperStyle.css";

function Swipper({ swipperData, title }) {
  return (
    <div className="container">
      <h1 className="heading">{title}</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {swipperData.map((item) => (
          <SwiperSlide>
            <img src={item.img} alt={item.alt} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Swipper;
