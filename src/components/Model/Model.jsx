import React from "react";
import Model3D from "../Model3D/Model3D";

export default function Model() {
  return (
    <section className="common-padding">
      <div className="screen-max-with">
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <Model3D/> 
          </div>
        </div>
      </div>
    </section>
  );
}
