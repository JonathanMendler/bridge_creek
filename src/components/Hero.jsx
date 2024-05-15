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
            <a
              href="https://www.google.com/localservices/prolist?g2lbs=AOHF13nsjgmiwyRZhwVEGGRXnhcvYOEBuAGrtp8dtC2b_1Qu3gYhGuNdlPrhH3JecYBrYZ7Kies8k3TVRxCk3A2WeTKXBUPVzBO2IGdcp81_Tqn2CLOcsP0%3D&hl=en-US&gl=us&cs=1&ssta=1&q=bridge%20creek%20electric&oq=bridge%20creek%20electric&slp=MgBSAggCYAB64gFDaFZpY21sa1oyVWdZM0psWldzZ1pXeGxZM1J5YVdOYUZ5SVZZbkpwWkdkbElHTnlaV1ZySUdWc1pXTjBjbWxqZWdwRllYVWdRMnhoYVhKbGtnRUxaV3hsWTNSeWFXTnBZVzZxQVZrUUFTb1pJaFZpY21sa1oyVWdZM0psWldzZ1pXeGxZM1J5YVdNb0FESWZFQUVpR3ktNUoxb3NOdzl5SjNRTE8wOGtfY19oQUo4T1BNenNtMFl4UGpJWkVBSWlGV0p5YVdSblpTQmpjbVZsYXlCbGJHVmpkSEpwWS1BQkFBkgFYCg0vZy8xMXYzZ2J5MzQwCg0vZy8xMW43Zjlqd2gwCg0vZy8xMXZzODkyM2pqCgsvZy8xdnp2NDZ3OAoNL2cvMTFmbnlwY19oeQoNL2cvMTF2cjU3NHB6Yg%3D%3D&src=2&spp=Cg0vZy8xMXZzODkyM2pqOrQBV2hjaUZXSnlhV1JuWlNCamNtVmxheUJsYkdWamRISnBZNUlCQzJWc1pXTjBjbWxqYVdGdW1nRUFxZ0ZaRUFFcUdTSVZZbkpwWkdkbElHTnlaV1ZySUdWc1pXTjBjbWxqS0FBeUh4QUJJaHN2dVNkYUxEY1BjaWQwQ3p0UEpQM1A0UUNmRGp6TTdKdEdNVDR5R1JBQ0loVmljbWxrWjJVZ1kzSmxaV3NnWld4bFkzUnlhV009&lrlstt=1715803269482&ved=2ahUKEwjKvbyZuZCGAxXklIkEHXidDvAQvS56BAhAEAE&scp=ChBnY2lkOmVsZWN0cmljaWFuEjwSEgmz0RNQFb34hxF1k5ND64tDPSIORWF1IENsYWlyZSwgV0kqFA0D3q0aFVi9Z8kd-wXAGiUWZIrJMAEaFWJyaWRnZSBjcmVlayBlbGVjdHJpYyIVYnJpZGdlIGNyZWVrIGVsZWN0cmljKgtFbGVjdHJpY2lhbg%3D%3D"
              className="pr-4 inline-block text-accent hover:text-white"
            >
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
