

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import menu1 from "../../assets/images/menu1.jpg";
import menu2 from "../../assets/images/menu2.jpg";
import menu3 from "../../assets/images/menu3.jpg";
import menu4 from "../../assets/images/menu4.jpg";
import menu5 from "../../assets/images/menu5.jpg";
import menu6 from "../../assets/images/menu6.jpg";
import menu7 from "../../assets/images/menu7.jpg";
import menu8 from "../../assets/images/menu8.jpg";
import menu9 from "../../assets/images/menu9.jpeg";
import menu10 from "../../assets/images/menu10.jpeg";
import menu11 from "../../assets/images/menu11.jpeg";
import menu12 from "../../assets/images/menu12.jpeg";
import menu13 from "../../assets/images/menu13.jpeg";
import menu14 from "../../assets/images/menu14.jpeg";

const menuItems = [
  { img: menu1, name: "" },
  { img: menu2, name: "Burger" },
  { img: menu3, name: "Momos" },
  { img: menu4, name: "Pasta" },
  { img: menu5, name: "Chinese" },
  { img: menu6, name: "Chaat" },
  { img: menu7, name: "Paratha" },
  { img: menu8, name: "Sandwich" },
  { img: menu9, name: "Pakora" },
  { img: menu10, name: "Ghar ka Swad" },
  { img: menu11, name: "Beverages" },
  { img: menu12, name: "Combos" },
  { img: menu13, name: "Egg Dishes" },
  { img: menu14, name: "South Indian" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? menuItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          Our Menu
        </motion.h2>

        <p className="text-white/60 mt-4">
          Crafted with love, designed for taste 🍽️
        </p>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setCurrent(i);
                setOpen(true);
              }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <p className="text-yellow-400 text-lg font-semibold">
                  {item.name}
                </p>
                <span className="text-white text-md mt-1">
                  View Menu
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400"
            >
              ✕
            </button>

            {/* Left */}
            <button
              onClick={prevSlide}
              className="absolute left-6 text-white text-4xl hover:text-yellow-400"
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={current}
              src={menuItems[current].img}
              alt="menu"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[85%] rounded-xl shadow-2xl"
            />

            {/* Right */}
            <button
              onClick={nextSlide}
              className="absolute right-6 text-white text-4xl hover:text-yellow-400"
            >
              ›
            </button>

            {/* Bottom Info */}
            <div className="absolute bottom-8 text-center">
              <p className="text-yellow-400 text-lg font-semibold">
                {menuItems[current].name}
              </p>
              <p className="text-white/60 text-sm">
                {current + 1} / {menuItems.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;