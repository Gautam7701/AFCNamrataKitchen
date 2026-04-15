// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import img1 from "../../assets/images/img21.jpg";
// import img2 from "../../assets/images/img22.jpg";
// import img3 from "../../assets/images/img23.jpg";

// const images = [img1, img2, img3];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">

//       {/* Background */}
//       {images.map((img, i) => (
//         <motion.img
//           key={i}
//           src={img}
//           className="absolute w-full h-full object-cover"
//           initial={{ opacity: 0, scale: 1.2 }}
//           animate={{
//             opacity: i === index ? 1 : 0,
//             scale: i === index ? 1 : 1.2,
//           }}
//           transition={{ duration: 1.2 }}
//         />
//       ))}

//       {/* 🔥 Gradient Overlay (better than plain black) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

//       {/* Content (LEFT ALIGNED NOW 🔥) */}
//       <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        
//         <div className="max-w-xl">

//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-1 rounded-full text-sm mb-4"
//           >
//             Fresh • Hygienic • Homemade
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold text-white leading-tight"
//           >
//             AFC Namrata’s <br />
//             <span className="text-yellow-400">Kitchen</span>
//           </motion.h1>

//           {/* Tagline */}
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-yellow-400 mt-4 text-xl md:text-2xl font-medium"
//           >
//             Swad bhi. Sehat bhi.
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-white/80 mt-4"
//           >
//             Fresh, hygienic and delicious meals made with love.  
//             Food that feels like home, but tastes even better.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex gap-4 mt-6"
//           >
//             <button
//               onClick={() =>
//                 document
//                   .getElementById("menu")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
//             >
//               Explore Menu
//             </button>

//             <button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
//             >
//               Contact Us
//             </button>
//           </motion.div>
//         </div>
//       </div>

    
//     </div>
//   );
// };

// export default Hero;


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
    <div className="h-screen flex flex-col md:flex-row items-center px-6 md:px-16 bg-black">

      {/* 🔥 LEFT SIDE (CONTENT) */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-20 md:mt-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-1 rounded-full text-sm mb-4"
        >
          Fresh • Hygienic • Homemade
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          AFC Namrata’s <br />
          <span className="text-yellow-400">Kitchen</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-400 mt-4 text-xl md:text-2xl font-medium"
        >
          Swad bhi. Sehat bhi.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 mt-4 max-w-md"
        >
          Fresh, hygienic and delicious meals made with love.  
          Food that feels like home, but tastes even better.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-6 justify-center md:justify-start"
        >
          <button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Explore Menu
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* 🔥 RIGHT SIDE (IMAGE SLIDER) */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] mt-10 md:mt-0 relative">

        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="absolute w-full h-full object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.1,
            }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Glow Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-yellow-400/20"></div>
      </div>
    </div>
  );
};

export default Hero;