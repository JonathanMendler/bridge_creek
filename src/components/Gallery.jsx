import React, { useState } from "react";

function Gallery() {
  return (
    <div className="bg-secondary text-white p-5 md:p-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <p className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">Gallery</p>
          <p className="mt-6 text-lg leading-8 text-white mb-8">
            Welcome to the project gallery! Take a look at the photos to see the before-and-after of homes getting
            powered up. You&#39ll see wires, switches, and outlets turning houses into cozy spaces. Whether it&#39s a
            new project or one we&#39ve just wrapped up, each picture tells a story of hard work and dedication.
          </p>
        </div>
      </div>
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <img className="rounded-3xl" src="./images/carrie_kitchen_bones.png" alt="" />
        <img className="rounded-3xl" src="./images/carrie_kitchen_mid.png" alt="" />
        <img className="rounded-3xl" src="./images/carrie_kitchen.png" alt="" />
        <img className="rounded-3xl" src="./images/wall.png" alt="" />
        <img className="rounded-3xl" src="./images/wall2.png" alt="" />
        <img className="rounded-3xl" src="./images/cabinet.png" alt="" />
        <img className="rounded-3xl" src="./images/cabinet_lit.png" alt="" />
        <img className="rounded-3xl" src="./images/lightbar.png" alt="" />
        <img className="rounded-3xl" src="./images/wine_corner.png" alt="" />
        <img className="rounded-3xl" src="./images/bathroom.png" alt="" />
        <img className="rounded-3xl" src="./images/bones.png" alt="" />
        <img className="rounded-3xl" src="./images/interior.png" alt="" />
        <img className="rounded-3xl" src="./images/utility.png" alt="" />
        <img className="rounded-3xl" src="./images/barn.png" alt="" />
        <img className="rounded-3xl" src="./images/barn2.png" alt="" />
        <img className="rounded-3xl" src="./images/fusebox.png" alt="" />
      </div>
    </div>
  );
}

export default Gallery;
