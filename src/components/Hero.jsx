import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { heroVideo } from "../utils";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 0.9,
        y: -1,
        duration: 4,
      },
      gsap.fromTo(
        ".Video-logo",
        {
          opacity: 0,
          y: 100,
        },
        { opacity: 0.9, y: -1, duration: 4 }
      ),
      gsap.fromTo(
        ".btn",
        {
          opacity: 0,
          y: 50,
          delay: 1,
        },
        { opacity: 0.9, y: -1, duration: 4,    delay: 1,}
      )
    );
  }, []);
  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="text-5xl font-bold tracking-widest hero-title">
          MSI Compony
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="Video-logo pointer-events-none"
            autoPlay
            muted
            playsInline={true}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="action" className="flex flex-col items-center ">
        <a href="#Popular" className="btn">
          See More!
        </a>
      </div>
    </section>
  );
}
