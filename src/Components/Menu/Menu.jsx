

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import menu1 from "../../assets/images/menuu1.png";
// import menu2 from "../../assets/images/menuu2.png";
// import menu3 from "../../assets/images/menuu3.png";
// import menu4 from "../../assets/images/4.png";
// import menu5 from "../../assets/images/5.png";
// import menu6 from "../../assets/images/6.png";
// import menu7 from "../../assets/images/7.png";
// import menu8 from "../../assets/images/8.png";
// import menu9 from "../../assets/images/9.png";
// import menu10 from "../../assets/images/10.png";
// import menu11 from "../../assets/images/11.png";
// import menu12 from "../../assets/images/12.png";
// import menu13 from "../../assets/images/13.png";
// import menu14 from "../../assets/images/14.png";

// const menuItems = [
//   { img: menu1, name: "" },
//   { img: menu2, name: "Burger" },
//   { img: menu3, name: "Momos" },
//   { img: menu4, name: "Pasta" },
//   { img: menu5, name: "Chinese" },
//   { img: menu6, name: "Chaat" },
//   { img: menu7, name: "Paratha" },
//   { img: menu8, name: "Sandwich" },
//   { img: menu9, name: "Pakora" },
//   { img: menu10, name: "Ghar ka Swad" },
//   { img: menu11, name: "Beverages" },
//   { img: menu12, name: "Combos" },
//   { img: menu13, name: "Egg Dishes" },
//   { img: menu14, name: "South Indian" },
// ];

// const Menu = () => {
//   const [open, setOpen] = useState(false);
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % menuItems.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? menuItems.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="min-h-screen px-6 py-20 bg-black">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-3xl md:text-5xl font-bold text-yellow-400"
//         >
//           Our Menu
//         </motion.h2>

//         <p className="text-white/60 mt-4">
//           Crafted with love, designed for taste 🍽️
//         </p>

//         {/* 🔥 GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
//           {menuItems.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.05 }}
//               whileHover={{ scale: 1.05 }}
//               onClick={() => {
//                 setCurrent(i);
//                 setOpen(true);
//               }}
//               className="relative group cursor-pointer overflow-hidden rounded-2xl"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
//                 <p className="text-yellow-400 text-lg font-semibold">
//                   {item.name}
//                 </p>
//                 <span className="text-white text-md mt-1">
//                   View Menu
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 🔥 MODAL */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             {/* Close */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400"
//             >
//               ✕
//             </button>

//             {/* Left */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-6 text-white text-4xl hover:text-yellow-400"
//             >
//               ‹
//             </button>

//             {/* Image */}
//             <motion.img
//               key={current}
//               src={menuItems[current].img}
//               alt="menu"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.3 }}
//               className="max-h-[85vh] max-w-[85%] rounded-xl shadow-2xl"
//             />

//             {/* Right */}
//             <button
//               onClick={nextSlide}
//               className="absolute right-6 text-white text-4xl hover:text-yellow-400"
//             >
//               ›
//             </button>

//             {/* Bottom Info */}
//             <div className="absolute bottom-8 text-center">
//               <p className="text-yellow-400 text-lg font-semibold">
//                 {menuItems[current].name}
//               </p>
//               <p className="text-white/60 text-sm">
//                 {current + 1} / {menuItems.length}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Menu;




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import menu1 from "../../assets/images/menuu1.png";
import menu2 from "../../assets/images/menuu2.png";
import menu3 from "../../assets/images/menuu3.png";
import menu4 from "../../assets/images/4.png";
import menu5 from "../../assets/images/5.png";
import menu6 from "../../assets/images/6.png";
import menu7 from "../../assets/images/7.png";
import menu8 from "../../assets/images/8.png";
import menu9 from "../../assets/images/9.png";
import menu10 from "../../assets/images/10.png";
import menu11 from "../../assets/images/11.png";
import menu12 from "../../assets/images/12.png";
import menu13 from "../../assets/images/13.png";
import menu14 from "../../assets/images/14.png";

const menuItems = [
  { img: menu1, name: "Chef Special" },
  { img: menu2, name: "Burger" },
  { img: menu3, name: "Momos" },
  { img: menu4, name: "Pasta" },
  { img: menu5, name: "Chinese" },
  { img: menu6, name: "Chaat" },
  { img: menu7, name: "Paratha" },
  { img: menu8, name: "Sandwich" },
  { img: menu9, name: "Pakora" },
  { img: menu10, name: "Ghar Ka Swad" },
  { img: menu11, name: "Beverages" },
  { img: menu12, name: "Combos" },
  { img: menu13, name: "Egg Dishes" },
  { img: menu14, name: "South Indian" },
];

const Menu = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-14 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
            Explore Our Menu
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Delicious flavors, crafted with passion and served with love.
          </p>
        </motion.div>

        {/* Auto moving category chips */}
        <div className="relative overflow-hidden mt-12">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...menuItems, ...menuItems].map((item, i) => (
              <button
                key={i}
                onClick={() => setSelected(i % menuItems.length)}
                className="px-5 py-2 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-yellow-400 hover:text-black transition whitespace-nowrap flex-shrink-0"
              >
                {item.name}
              </button>
            ))}
          </motion.div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(i)}
              className="cursor-pointer rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-yellow-400 text-sm mt-2">
                  View Menu →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-4xl text-white hover:text-yellow-400"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={() =>
                setSelected(
                  selected === 0 ? menuItems.length - 1 : selected - 1
                )
              }
              className="absolute left-6 text-5xl text-white hover:text-yellow-400"
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-4xl w-full"
            >
              <img
                src={menuItems[selected].img}
                alt={menuItems[selected].name}
                className="w-full max-h-[85vh] object-contain rounded-3xl border border-zinc-700 shadow-2xl"
              />

              <div className="text-center mt-5">
                <h2 className="text-2xl font-bold text-yellow-400">
                  {menuItems[selected].name}
                </h2>
                <p className="text-white/50 mt-1">
                  {selected + 1} / {menuItems.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={() =>
                setSelected((selected + 1) % menuItems.length)
              }
              className="absolute right-6 text-5xl text-white hover:text-yellow-400"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;