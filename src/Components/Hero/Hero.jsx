


import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/images/hero1.jfif";
import img2 from "../../assets/images/hero2.jfif";
import img3 from "../../assets/images/hero3.jfif";

const images = [img1, img2, img3];


const Hero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full-bleed background images */}
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.05 }}
          transition={{ duration: 1.2 }}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-1 rounded-full text-sm mb-6 w-fit"
        >
          Fresh • Hygienic • Homemade
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          AFC Namrata's <br />
          <span className="text-yellow-400">Kitchen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 mt-4 text-xl md:text-2xl font-medium italic"
        >
          Swad bhi. Sehat bhi.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/70 mt-4 max-w-md text-base"
        >
          Fresh, hygienic and delicious meals made with love.
          Food that feels like home, but tastes even better.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-8"
        >
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg shadow-yellow-400/30"
          >
            Explore Menu
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/50 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition backdrop-blur-sm"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Slide dots */}
        <div className="flex gap-2 mt-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-yellow-400" : "w-3 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;