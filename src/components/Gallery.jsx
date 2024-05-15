import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Gallery() {
  return (
    <div className="bg-secondary text-white p-5 md:p-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <p className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">Gallery</p>
          <p className="mt-6 text-lg leading-8 text-white mb-8">
            Welcome to the project gallery! Take a look at the photos to see the before-and-after of homes getting
            powered up. You'll see wires, switches, and outlets turning houses into cozy spaces. Whether it's a new
            project or one we've just wrapped up, each picture tells a story of hard work and dedication.
          </p>
        </div>
      </div>
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/carrie_kitchen_bones.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/carrie_kitchen_mid.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/carrie_kitchen.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/wall.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/wall2.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/cabinet.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/cabinet_lit.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/lightbar.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/wine_corner.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/bathroom.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/bones.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/interior.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/utility.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/barn.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/barn2.jpeg" alt="" />
        <LazyLoadImage className="rounded-3xl" effect="blur" src="./images/fusebox.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Gallery;
