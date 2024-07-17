import React, { useRef, useEffect } from "react";
import Model3D from "../Model3D/Model3D";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const Paragraphs = gsap.utils.toArray(".Paragraphs");
    Paragraphs.forEach((header) => {
      gsap.fromTo(
        header,
        {
          opacity: 0,
          y: -70,
    
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: header,
            start: "bottom bottom",
            end: "top 30%",
            scrub: true,
            stagger: 1,
            display:3,
            direction:5,
          },
        }
      );
    });

    
  }, []);

//   const Description = gsap.utils.toArray(".Description");
//   Description.forEach((description) => {
//     gsap.fromTo(
//       description,
//       { opacity: 0, x: 350, y: -40 },
//       {
//         y: 0,
//         opacity: 1,
//         scrollTrigger: {
//           trigger: header,
//           start: "bottom bottom",
//           end: "top 30%",
//           scrub: true,
//           stagger: 1,
//         },
//       }
//     );
//   }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width" ref={scrollRef}>
        <div className="text-center text-4xl flex justify-center gap-2">
          <p className="Paragraphs">Take</p>
          <p className="Paragraphs">a</p>
          <p className="Paragraphs">closer</p>
          <p className="Paragraphs">look</p>
          <p className="Paragraphs">at</p>
          <p className="Paragraphs">our</p>
          <p className="Paragraphs">new</p>
          <p className="Paragraphs">model</p>
          <p className="Paragraphs">.</p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <Model3D />
          </div>
        </div>
        <p className="text-center relative bottom-60 Paragraphs">
    
          MSI GF65 Thin 10UE-213 15.6" Gaming Laptop
        </p>
        <br />
        <p className="text-center relative bottom-60 Paragraphs opacity-75">
          Elevate your gaming and productivity experience with the MSI GF65 Thin
          10UE-213. This high-performance laptop is designed for gamers and
          power users who demand the best. Featuring cutting-edge technology and
          sleek aesthetics, it is the perfect companion for both work and play.
        </p>
      </div>
    </section>
  );
}
