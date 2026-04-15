import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black border-t border-white/10 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-yellow-400">
            AFC Namrata’s Kitchen
          </h1>
          <p className="text-white/60 text-sm mt-2">
            Swad bhi. Sehat bhi.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-white/70">
          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>
          <a href="#menu" className="hover:text-yellow-400 transition">
            Menu
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-xl text-yellow-400">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-white/50 text-sm mt-6">
        © {new Date().getFullYear()} AFC Namrata’s Kitchen. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;