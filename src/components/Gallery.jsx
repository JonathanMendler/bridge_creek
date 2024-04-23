import React, { useState } from "react";

function Gallery() {
  return (
    <div className="bg-secondary p-5 md:p-10">
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <img className="rounded-3xl" src="./public/images/carrie_kitchen.png" alt="" />
        <img className="rounded-3xl" src="./public/images/bathroom.png" alt="" />
        <img className="rounded-3xl" src="./public/images/interior.png" alt="" />
        <img className="rounded-3xl" src="./public/images/utility.png" alt="" />
        <img className="rounded-3xl" src="./public/images/barn2.png" alt="" />
        <img className="rounded-3xl" src="./public/images/fusebox.png" alt="" />
      </div>
    </div>
  );
}

export default Gallery;
