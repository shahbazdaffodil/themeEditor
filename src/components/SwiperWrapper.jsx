import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination]);

function SwiperWrapper(props) {
  const { children = [], config } = props;
  return (
    <Swiper {...config}>
      {children.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperWrapper;
