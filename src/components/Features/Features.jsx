import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 mt-24 w-full">
          <h1 id="features_title" className="section-heading ps-24">
            Explore the full story.
          </h1>
          <div
            id="features_title"
            className="section-heading mb-24 ps-24 mt-20"
          >
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in deeps of hell.
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[40vh] mb-10 w-[91%] flex items-center">
              <img
                src={exploreVideo}
                alt="titanium"
                className="feature-video g_grow"
              />
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <video
                    playsInline
                    id="exploreVideo"
                    className="w-full h-full object-cover object-center"
                    preload="none"
                    muted
                    autoPlay
                    ref={videoRef}
                  >
                    <source src={explore1Img} type="video/mp4" />
                  </video>
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    MSI's new motherboards are{" "}
                    <span className="text-white">
                      the first to feature a 10-layer PCB design
                    </span>
                    , providing unparalleled signal integrity and stability.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    With a focus on overclocking, MSI's new motherboards boast{" "}
                    <span className="text-white">
                      the most advanced power delivery system
                    </span>
                    , ensuring stable power to your CPU and RAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;