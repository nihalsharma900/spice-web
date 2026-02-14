import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
      <SwiperSlide>
        <img src="https://source.unsplash.com/1200x500/?spices" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/1200x500/?indian-spices" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
