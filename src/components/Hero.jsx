import React from "react";
import HeroImg from "../assets/DimRoom.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiLinkedin, SiFacebook } from "react-icons/si";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">Bridge Creek Electric</h1>

          <p className="py-5">Eau Claire's choice for their electrical installs and services </p>

          <div className="flex py-5 ">
            <a href="https://twitter.com/CoderAmrin" className="pr-4 inline-block text-accent hover:text-white">
              {" "}
              <AiFillGoogleCircle size={44} />{" "}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093478291576"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <SiFacebook size={40} />{" "}
            </a>
          </div>

          <a
            href="/#testimonial"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white rounded-lg px-6 py-3 hover:bg-transparent"
          >
            See Testimonials
          </a>
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="electrical illustration" className="lgw-[80%] ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
