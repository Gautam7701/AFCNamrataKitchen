import { motion } from "framer-motion";
import aboutImg from "../../assets/images/aboutus.jfif"; // 👉 add a real kitchen / food image

const About = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
       {/* LEFT IMAGE — replace existing motion.div */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  className="w-full md:w-1/2 relative"
>
  {/* Decorative glow behind image */}
  <div className="absolute -inset-3 bg-yellow-400/20 rounded-3xl blur-2xl" />
  <div className="absolute -inset-1 rounded-2xl border border-yellow-400/30" />
  <img
    src={aboutImg}
    alt="About"
    className="relative rounded-2xl shadow-2xl w-full object-cover"
  />
</motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            About Us
          </h2>

          {/* Tagline */}
          <p className="text-white mt-4 text-lg font-medium">
            Swad bhi. Sehat bhi.
          </p>

          {/* Description */}
          <p className="text-white/70 mt-4 leading-relaxed">
            At AFC Namrata’s Kitchen, we believe that food should not only 
            taste delicious but also nourish your body. Every meal is prepared 
            with fresh ingredients, maintaining hygiene and love in every step.
          </p>

          <p className="text-white/70 mt-4 leading-relaxed">
            Our goal is simple — to bring you homemade flavors that remind you 
            of comfort, care, and quality.
          </p>

          {/* Add this after the second <p> tag, before the button */}
<div className="flex gap-8 mt-6 justify-center md:justify-start">
  {[["1000+", "Happy Customers"], ["50+", "Menu Items"], ["5★", "Rating"]].map(([num, label]) => (
    <div key={label} className="text-center">
      <div className="text-yellow-400 text-xl font-bold">{num}</div>
      <div className="text-white/50 text-xs mt-1">{label}</div>
    </div>
  ))}
</div>
          {/* CTA */}
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Explore Menu
          </button>

        </motion.div>
      </div>
    </div>
  );
};

export default About;