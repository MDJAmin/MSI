// import React, { useRef } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";

// import "./style.module.css";

// // import required modules
// import { Scrollbar } from "swiper/modules";
// import {
//   highlightFirstGif,
//   highlightFirstVideo,
//   highlightFourthGif,
//   highlightFourthVideo,
//   highlightSecondGif,
//   highlightSecondVideo,
//   highlightThirdGif,
//   highlightThirdVideo,
// } from "../../utils";

// export default function App() {
//   const swiperRef = useRef(null);

//   const handleVideoEnd = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   return (
//     <>
//       <div id="Popular">
//         <Swiper
//           scrollbar={{
//             hide: true,
//           }}
//           modules={[Scrollbar]}
//           className="mySwiper"
//           ref={swiperRef}
//         >
//           <SwiperSlide>
//             <div className="flex">
//             <video
//               className="pointer-events-none w-full  px-36 slider-video"
//               autoPlay
//               muted
//               playsInline={true}
//               onEnded={handleVideoEnd}
//             >
//               <source src={highlightFirstVideo} type="video/mp4" />
//             </video></div>
//             {/* <img src={highlightFirstGif} alt="" /> */}
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex">
//             <video
//               className="pointer-events-none w-full px-36 slider-video"
//               autoPlay
//               muted
//               playsInline={true}
//               onEnded={handleVideoEnd}
//             >
//               <source src={highlightSecondVideo} type="video/mp4" />
//             </video></div>
//             {/* <img src={highlightSecondGif} alt="" /> */}
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex">
//             <video
//               className="pointer-events-none w-full px-36 slider-video"
//               autoPlay
//               muted
//               playsInline={true}
//               onEnded={handleVideoEnd}
//             >
//               <source src={highlightThirdVideo} type="video/mp4" />
//             </video></div>
//             {/* <img src={highlightThirdGif} alt="" /> */}
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="flex">
//             <video
//               className="pointer-events-none w-full px-36 slider-video"
//               autoPlay
//               muted
//               playsInline={true}
//               onEnded={handleVideoEnd}
//             >
//               <source src={highlightFourthVideo} type="video/mp4" />
//             </video></div>
//             {/* <img src={highlightFourthGif} alt="" /> */}
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// }
import React, { useRef, useEffect } from "react";
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
  const gifDurations = [5000, 5000, 5000, 5000]; // Example durations in milliseconds for each GIF

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
      // Clear all timeouts when slide changes
      timeouts.forEach(clearTimeout);
      timeouts = [];

      // Set timeout for the new active slide
      setSlideTimeout(swiperInstance.activeIndex);
    });

    // Set initial timeout for the first slide
    setSlideTimeout(swiperInstance.activeIndex);

    // Cleanup on unmount
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <div id="Popular" className="mb-20">
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
