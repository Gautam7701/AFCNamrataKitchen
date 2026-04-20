
import { motion } from "framer-motion";
import aboutImg from "../../assets/images/aboutus.png";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* 🔥 LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[55%] relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
          
          {/* Border */}
          <div className="absolute -inset-1 rounded-2xl border border-yellow-400/30" />

          {/* Image */}
          <img
            src={aboutImg}
            alt="About"
            className="relative w-full h-[420px] md:h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition duration-500"
          />
        </motion.div>

        {/* 🔥 RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[45%] flex flex-col justify-center max-w-xl text-center md:text-left"
        >

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
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

          {/* Stats */}
          <div className="flex gap-8 mt-8 justify-center md:justify-start">
            {[
              ["1000+", "Happy Customers"],
              ["50+", "Menu Items"],
              ["5★", "Rating"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-yellow-400 text-2xl font-bold">
                  {num}
                </div>
                <div className="text-white/50 text-xs mt-1">
                  {label}
                </div>
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
            className="mt-8 w-fit bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition mx-auto md:mx-0"
          >
            Explore Menu
          </button>

        </motion.div>
      </div>
    </div>
  );
};

export default About;