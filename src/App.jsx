// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import BestSellers from "./Components/BestSeller/BestSeller";
// import Menu from "./Components/Menu/Menu";
// import WhyUs from "./Components/WhyUs/WhyUs";
// import Gallery from "./Components/Gallery/Gallery";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";

// function App() {
//   return (
//     <div className="bg-[var(--primary)] text-[var(--secondary)] overflow-x-hidden">
      
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <Hero />

//       {/* About */}
//       <About />

//       {/* Best Sellers */}
//       <BestSellers />

//       {/* Menu */}
//       <Menu />

//       {/* Why Choose Us */}
//       <WhyUs />

//       {/* Gallery */}
//       <Gallery />

//       {/* Contact */}
//       <Contact />

//       {/* Footer */}
//       <Footer />

//     </div>
//   );
// }

// export default App;

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import BestSellers from "./Components/BestSeller/BestSeller";
import Menu from "./Components/Menu/Menu";
import WhyUs from "./Components/WhyUs/WhyUs";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="bg-[var(--primary)] text-[var(--secondary)] overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Sections with IDs for scrolling */}

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="bestsellers">
        <BestSellers />
      </section>

      <section id="whyus">
        <WhyUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;