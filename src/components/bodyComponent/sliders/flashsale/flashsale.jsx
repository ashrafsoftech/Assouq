import { useUserContext } from "../../../../UserContext";
import "./flashsale.css";
import { flashsale } from "../../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const FlashSale = () => {
  const { hours, minutes, seconds } = useUserContext();

  return (
    <article id="flashsale">
      <header>
        <h2>Flash Sale 🔥</h2>
        <div className="countdown">
          <span>Time Left: </span>
          <span>
            {String(hours).padStart(2, "0")}h :
            {String(minutes).padStart(2, "0")}m :
            {String(seconds).padStart(2, "0")}s
          </span>
        </div>
      </header>

      <div className="flashsale-slider">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            425: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1440: { slidesPerView: 7 },
          }}
        >
          {flashsale.map((item) => {
            const progress = (item.itemsLeft / item.totalItems) * 100;
            return (
              <SwiperSlide key={item.id}>
                <div className="slide-item">
                  <img src={item.image} alt={item.text} />
                  <p className="item-name">{item.text}</p>

                  <p className="reduced-price">{item.reducedprice}</p>
                  <p className="actual-price">{item.actualprice}</p>

                  <p className="items-left">{item.itemsLeft} items left</p>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
};
