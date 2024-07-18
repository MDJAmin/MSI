import React from "react";
import { BallCanvas } from "../canvas/Ball";
import { SectionWrapper } from "../../hoc";
import javascript from "../../assets/tech/javascript.png";
import typescript from "../../assets/tech/typescript.png";
import html from "../../assets/tech/html.png";
import css from "../../assets/tech/css.png";
import reactjs from "../../assets/tech/reactjs.png";
import redux from "../../assets/tech/redux.png";
import tailwind from "../../assets/tech/tailwind.png";
import nodejs from "../../assets/tech/nodejs.png";
import mongodb from "../../assets/tech/mongodb.png";
import git from "../../assets/tech/git.png";
import figma from "../../assets/tech/figma.png";
import docker from "../../assets/tech/docker.png";
import threejs from "../../assets/tech/threejs.svg";

const Tech = () => {
  const technologies = [
    { name: "javascript", icon: javascript },
    { name: "typescript", icon: typescript },
    { name: "html", icon: html },
    { name: "css", icon: css },
    { name: "reactjs", icon: reactjs },
    { name: "redux", icon: redux },
    { name: "tailwind", icon: tailwind },
    { name: "nodejs", icon: nodejs },
    { name: "mongodb", icon: mongodb },
    { name: "git", icon: git },
    { name: "figma", icon: figma },
    { name: "docker", icon: docker },
    { name: "threejs", icon: threejs },
  ];

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
