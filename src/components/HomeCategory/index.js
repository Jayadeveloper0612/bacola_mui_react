import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCategory = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  return (
    <>
      <section className="homeCategory">
        <div className="container">
          <h3 className="mb-3 hd">featured Categories </h3>
          <Swiper
            slidesPerView={10}
            spaceBetween={8}
            navigation={true}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="mySwiper"
          >
            {itemBg?.map((item, index) => {
              return (
                <SwiperSlide>
                  <div
                    className="item text-center cursor"
                    style={{ background: item }}
                  >
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
                      alt=""
                    />
                    <h6>Red Apple</h6>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* 1 */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeCategory;
