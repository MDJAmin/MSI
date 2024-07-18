import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./style.module.css";
import { Scrollbar } from "swiper/modules";
import {
  highlightFirstGif,
  highlightFourthGif,
  highlightSecondGif,
  highlightThirdGif,
} from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".slider > div", 
      {
        opacity: 0,
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".slider", 
          start: "top 80%", 
          end: "top 30%",
          scrub: true,
          stagger: 0.1, 
        },
      }
    );
  }, []);

  const swiperRef = useRef(null);
  const gifDurations = [5000, 5000, 5000, 5000];

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    let timeouts = [];

    const setSlideTimeout = (index) => {
      const timeout = setTimeout(() => {
        if (swiperInstance) {
          if (index === gifDurations.length - 1) {
            swiperInstance.slideTo(0);
          } else {
            swiperInstance.slideNext();
          }
        }
      }, gifDurations[index]);

      timeouts.push(timeout);
    };

    swiperInstance.on("slideChange", () => {
      timeouts.forEach(clearTimeout);
      timeouts = [];

      setSlideTimeout(swiperInstance.activeIndex);
    });

    setSlideTimeout(swiperInstance.activeIndex);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <div id="Popular" className="slider mb-40 mt-20">
        <Swiper
          // scrollbar={{
          //   hide: true,
          // }}
          modules={[Scrollbar]}
          className="mySwiper"
          ref={swiperRef}
        >
          <SwiperSlide>
            <img
              style={{ width: "60%", margin: "auto", cursor: "pointer" }}
              className="rounded-3xl"
              src={highlightFirstGif}
              alt="Popular-products"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "60%", margin: "auto", cursor: "pointer" }}
              className="rounded-3xl"
              src={highlightSecondGif}
              alt="Popular-products"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "60%", margin: "auto", cursor: "pointer" }}
              className="rounded-3xl"
              src={highlightThirdGif}
              alt="Popular-products"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "60%", margin: "auto", cursor: "pointer" }}
              className="rounded-3xl"
              src={highlightFourthGif}
              alt="Popular-products"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
