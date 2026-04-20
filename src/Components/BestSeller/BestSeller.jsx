import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import item1 from "../../assets/images/pakoda.png";
import item2 from "../../assets/images/roll.png";
import item3 from "../../assets/images/thali.png";
import item4 from "../../assets/images/sandwich.png";
import item5 from "../../assets/images/parathe.png";
import item6 from "../../assets/images/kabab.png";

const phone = "+919837377354";

const items = [
  {
    name: "Crispy Pakodi",
    desc: "Hot, crunchy fritters served with chutney.",
    price: "₹70",
    tag: "🔥 Bestseller",
    img: item1,
  },
  {
    name: "Kathi Roll",
    desc: "Loaded with spicy filling & wrapped in soft paratha.",
    price: "₹120",
    tag: "⭐ Popular",
    img: item2,
  },
  {
    name: "Special Thali",
    desc: "Complete meal with dal, sabzi, paneer, roti & rice.",
    price: "₹130",
    tag: "💛 Must Try",
    img: item3,
  },
  {
    name: "Grilled Sandwich",
    desc: "Crispy bread filled with cheesy goodness.",
    price: "₹80",
    tag: "🔥 Hot",
    img: item4,
  },
  {
    name: "Stuffed Paratha",
    desc: "Butter-loaded paratha with authentic flavors.",
    price: "₹60",
    tag: "⭐ Favorite",
    img: item5,
  },
  {
    name: "Veg Kabab",
    desc: "Smoky, spicy kebabs grilled to perfection.",
    price: "₹120",
    tag: "💛 Special",
    img: item6,
  },
];

const BestSeller = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400"
        >
          Best Sellers
        </motion.h2>

        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          Loved by everyone, made with care 💛 Browse our most popular dishes and order fresh in minutes.
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-t-[1.75rem]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    {item.tag}
                  </span>
                  <span className="text-xl font-bold text-white">{item.price}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white group-hover:text-yellow-400 transition">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>

               <a
  href={`https://wa.me/${phone}?text=Hi%20I%20want%20to%20order%20${item.name}%20from%20AFC%20Namrata's%20Kitchen`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 hover:scale-[1.02]"
>
  <FaWhatsapp className="text-lg" />
  Order on WhatsApp
</a>  
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
