import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.jpg";


const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["home", "about", "menu", "contact"];

  const handleScroll = (item) => {
    setActive(item);
    setMenuOpen(false);

    document
      .getElementById(item)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div
  onClick={() => handleScroll("home")}
  className="flex items-center gap-3 cursor-pointer"
>
  <img
    src={logo}
    alt="Logo"
    className="h-12 md:h-14 object-contain"
  />

  <h1 className="text-lg md:text-xl font-bold text-yellow-400 tracking-wide">
    AFC Namrata’s Kitchen
  </h1>
</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <div
              key={item}
              onClick={() => handleScroll(item)}
              className="relative cursor-pointer group"
            >
              <span
                className={`${
                  active === item ? "text-yellow-400" : "text-white"
                } transition duration-300 capitalize`}
              >
                {item}
              </span>

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleScroll("menu")}
          className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
        >
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-yellow-400 text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-6 text-center"
        >
          {navItems.map((item) => (
            <span
              key={item}
              onClick={() => handleScroll(item)}
              className="text-white text-lg capitalize cursor-pointer hover:text-yellow-400 transition"
            >
              {item}
            </span>
          ))}

          <button
            onClick={() => handleScroll("menu")}
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
          >
            Order Now
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
