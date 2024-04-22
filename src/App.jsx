import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
// import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Gallery />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
