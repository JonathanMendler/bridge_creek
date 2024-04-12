import React from "react";
import cssProjects from "../assets/cssprojects.png";
import devlog from "../assets/devlog.png";
import getInspirred from "../assets/get-inspirred.png";
import uilogs from "../assets/uilogs.png";

const Testimonials = () => {
  const testimonials = [
    {
      img: devlog,
      name: "Ron L",
      review:
        " We have a 90 year old farmhouse and it desperately needed electrical upgrades.  Josh was so easy to work with and he communicated extremely well.  He is high character and extremely trustworthy.  We highly recommend him for any electrical work. ",
    },
    {
      img: uilogs,
      name: "Rachael G",
      review:
        "Josh installed AFCI's in our 1916 craftsman home which gave us a lot of peace of mind having some knob and tube still running various things in the house. Josh was really communicative throughout the process and transparent with pricing. He made time outside of his regular hours to get this sorted out for us so we could actually close on the house. He is definitely our go-to for any electrical needs!",
    },
    {
      img: cssProjects,
      name: "Carrie A",
      review: "Amazing kitchen reno",
    },
    {
      img: getInspirred,
      name: "Jonathan M",
      review:
        "I work from home & stream on Twitch, which requires a lot of equipment with power to match. I was concerned that the wiring in my house wouldn't be able to sustain it, so I sought out an electrician. Josh at Bridge Creek came out and was able to figure out how much power I would need and how we could achieve that without risking a house fire 😄 The next day he was back and installed a new circuit and outlets so I could get up and running. Great pricing and a pleasure to work with. I call him for all my home electrical needs now.",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">Testimonials</h2>

          <p className="pb-5">Here's what some of my previous clients have had to say about their experience.</p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="testimonials container mx-auto grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, i) => {
          return (
            <div className="relative" key={i}>
              <img src={testimonial.img} alt={testimonial.name} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">{testimonial.desc}</p>

                <div className="mx-auto">
                  <a href={testimonial.live} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold">
                    Live
                  </a>
                  <a href={testimonial.code} className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold">
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
