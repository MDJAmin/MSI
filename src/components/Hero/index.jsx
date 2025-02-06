import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../../utils";
import "./style.module.css";

export default function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".btn",
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 3, delay: 1, y: -20 }
    );
  }, []);

  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline key={isSmallScreen ? "small" : "large"}>
            <source src={isSmallScreen ? smallHeroVideo : heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex flex-col items-center relative">
        <a href="#Popular" className="btn">
          See More!
        </a>
      </div>
    </section>
  );
}
