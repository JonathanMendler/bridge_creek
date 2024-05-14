import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[400px] mx-auto border-indigo-600 pb-2">
          Contact Bridge Creek
        </h2>
        <p>Hours of Operation: Monday - Friday: 8am - 4:30pm</p>
        <p className="py-2">
          <span className="font-bold">Email:</span>{" "}
          <a className="cursor-pointer underline" href="mailto:bridgecreekelectric@gmail.com">
            bridgecreekelectric@gmail.com
          </a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> (715) 456-4759
        </p>
      </div>
    </section>
  );
};

export default Contact;
