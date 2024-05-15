import React from "react";

const testimonials = [
  {
    name: "- Ron L.",
    review:
      "We have a 90 year old farmhouse and it desperately needed electrical upgrades.  Josh was so easy to work with and he communicated extremely well.  He is high character and extremely trustworthy.  We highly recommend him for any electrical work.",
  },
  {
    name: "- Rachael G.",
    review:
      "Josh installed AFCI's in our 1916 craftsman home which gave us a lot of peace of mind having some knob and tube still running various things in the house. Josh was really communicative throughout the process and transparent with pricing. He made time outside of his regular hours to get this sorted out for us so we could actually close on the house. He is definitely our go-to for any electrical needs!",
  },
  {
    name: "- Carrie A.",
    review:
      "Bridge Creek recently installed 6 LED canned lights in my home with new switches, new wiring, as well as ceiling fans in two rooms. Josh did a fantastic job! Very impressed! I appreciated his consistent communication throughout the entire process and was very happy that my work was able to be completed within days of receiving the detailed quote! I will definitely use Bridge Creek Electric for all my future electrical work!",
  },
  {
    name: "- Jonathan M.",
    review:
      "I work from home & stream on Twitch, which requires a lot of equipment with power to match. I was concerned that the wiring in my house wouldn't be able to sustain it, so I sought out an electrician. Josh at Bridge Creek came out and was able to figure out how much power I would need and how we could achieve that without risking a house fire 😄 The next day he was back and installed a new circuit and outlets so I could get up and running. Great pricing and a pleasure to work with. I call him for all my home electrical needs now.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="bg-primary text-white p-5 md:p-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
              Testimonials
            </p>
            <p className="mt-6 text-lg leading-8 text-white mb-8">
              Here's what some of my previous clients have had to say about their experience.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.review}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
