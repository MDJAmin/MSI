import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { heroVideo } from "../../utils";
import "./style.module.css";
import { Link } from 'react-router-dom';
export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-title",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 0.9,
        y: 0,
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
          scrub: true,
        },
        { opacity: 0.9, duration: 4, delay: 2, scrub: true }
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
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="" className="flex flex-col items-center relative">
      <Link to="/popular" className="btn">
        See More!
      </Link>
      </div>
    </section>
  );
}
