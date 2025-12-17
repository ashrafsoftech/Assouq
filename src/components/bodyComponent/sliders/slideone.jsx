import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slideone.css";
import { gallery } from "../../../data";

const Slider = () => {
  return (
    <div className="sliderOne">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }}
      >
        {gallery.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
              <img src={slide.image} alt={slide.alt} />
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      {/* <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }}
        className="slidertwo"
      >
        {gallery.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
              <img src={slide.image} alt={slide.alt} />
              <p>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Slider;
