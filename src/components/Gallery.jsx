import React, { useState } from "react";

function Gallery() {
  const slides = [
    {
      url: "../assets/CarrieKitchen.png",
    },
    {
      url: "../assets/Bathroom.png",
    },
    {
      url: "../assets/Interior.png",
    },
    {
      url: "../assets/Utility.png",
    },
    {
      url: "../assets/Barn2.png",
    },
    {
      url: "../assets/Fusebox.png",
    },
  ];

  return (
    <div className="max-w-400px w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[0].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
    </div>
  );
}

export default Gallery;
