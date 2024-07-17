import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./style.module.css";

// import required modules
import { Scrollbar } from "swiper/modules";
import {
  highlightFirstGif,
  highlightFirstVideo,
  highlightFourthGif,
  highlightFourthVideo,
  highlightSecondGif,
  highlightSecondVideo,
  highlightThirdGif,
  highlightThirdVideo,
} from "../../utils";

export default function App() {
  const swiperRef = useRef(null);

  const handleVideoEnd = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div id="Popular">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
          ref={swiperRef}
        >
          <SwiperSlide>
            {/* <video
              className="pointer-events-none w-full  px-36 slider-video"
              autoPlay
              muted
              playsInline={true}
              onEnded={handleVideoEnd}
            >
              <source src={highlightFirstVideo} type="video/mp4" />
            </video> */}
            <img src={highlightFirstGif} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <video
              className="pointer-events-none w-full px-36 slider-video"
              autoPlay
              muted
              playsInline={true}
              onEnded={handleVideoEnd}
            >
              <source src={highlightSecondVideo} type="video/mp4" />
            </video> */}
            <img src={highlightSecondGif} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <video
              className="pointer-events-none w-full px-36 slider-video"
              autoPlay
              muted
              playsInline={true}
              onEnded={handleVideoEnd}
            >
              <source src={highlightThirdVideo} type="video/mp4" />
            </video> */}
            <img src={highlightThirdGif} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <video
              className="pointer-events-none w-full px-36 slider-video"
              autoPlay
              muted
              playsInline={true}
              onEnded={handleVideoEnd}
            >
              <source src={highlightFourthVideo} type="video/mp4" />
            </video> */}
            <img src={highlightFourthGif} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
