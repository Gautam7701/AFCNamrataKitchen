import { motion } from "framer-motion";

// 👉 add your images
import g1 from "../../assets/images/gallery1.jfif";
import g2 from "../../assets/images/gallery2.jfif";
import g3 from "../../assets/images/gallery3.jfif";
import g4 from "../../assets/images/bestseller.jfif";
import g5 from "../../assets/images/aboutus.jfif";
import g6 from "../../assets/images/hero3.jfif";

const images = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400"
        >
          Our Gallery
        </motion.h2>

        <p className="text-white/70 mt-4">
          A glimpse of our delicious creations 🍽️
        </p>

        {/* Grid */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
  {images.map((img, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.1 }}
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${
        i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
      }`}
    >
      <img
        src={img}
        alt="food"
        className={`w-full object-cover group-hover:scale-110 transition duration-500 ${
          i === 0 ? "h-72 md:h-full" : "h-56 md:h-64"
        }`}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <span className="text-yellow-400 text-lg font-semibold">View</span>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Gallery;