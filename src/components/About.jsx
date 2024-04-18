import React from "react";
import AboutImg from "../assets/Josh.jpeg";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About</h2>

          <p className="pb-5">
            Hello! I'm Josh, your local electrician here in Eau Claire. As a self-employed professional, I take great
            pride in providing top-quality electrical services to my community. With ### years of experience in the
            field, I bring expertise, reliability, and a commitment to safety to every job I undertake.
          </p>
          <p className="pb-5">
            Outside of work, I'm a dedicated husband and father of two amazing children. They inspire me to work hard
            and uphold the highest standards in my practice. Family is at the heart of everything I do, which is why I
            understand the importance of having a safe and well-functioning electrical system in your home.
          </p>
          <p className="pb-5">
            Whether you need a simple repair, an upgrade, or a complete electrical installation, you can count on me to
            deliver exceptional service with a personal touch. I believe in honest communication, transparent pricing,
            and always putting the needs of my customers first.
          </p>
          <p className="pb-5">
            When you choose me as your electrician, you're not just getting a service provider – you're getting a
            trusted partner who cares about your home and your family's safety. Thank you for considering me for your
            electrical needs, and I look forward to serving you soon.
          </p>
        </div>

        <div className="about-img">
          <img src={AboutImg} alt="Josh Heinze" className="rounded-3xl lgw-[80%] md:ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
