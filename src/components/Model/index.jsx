import React, { useRef, useEffect } from "react";
import Model3D from "../Model3D/Model3D";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".Paragraphs").forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: -50 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%", 
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="common-padding bg-zinc">
      <div className="screen-max-width" ref={scrollRef}>
        {/* Title Section */}
        <div className="text-center text-5xl flex justify-center gap-2 mt-28">
          {["Take", "a", "closer", "look", "at", "our", "new", "model"].map(
            (word, index) => (
              <p key={index} className="Paragraphs">
                {word}
              </p>
            )
          )}
        </div>

        {/* 3D Model Section */}
        <div className="flex flex-col items-center mt-9 ms-14">
          <div className="w-full h-[40vh] overflow-hidden flex justify-center">
            <Model3D />
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center">
          <p className="Paragraphs text-2xl font-bold">
            MSI GF65 Thin 10UE-213 15.6" Gaming Laptop
          </p>
          <p className="Paragraphs opacity-75 max-w-3xl m-auto">
            Elevate your gaming and productivity experience with the MSI GF65
            Thin 10UE-213. This high-performance laptop is designed for gamers
            and power users who demand the best. Featuring cutting-edge
            technology and sleek aesthetics, it is the perfect companion for
            both work and play.
          </p>
        </div>
      </div>
    </section>
  );
}
