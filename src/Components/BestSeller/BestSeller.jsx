import { motion } from "framer-motion";

// 👉 Add your images
import item1 from "../../assets/images/bestseller.jfif";
import item2 from "../../assets/images/gallery1.jfif";
import item3 from "../../assets/images/gallery2.jfif";

const items = [
  {
    name: "Grilled Sandwich",
    desc: "Crispy outside, loaded inside.",
    img: item1,
  },
  {
    name: "Healthy Bowl",
    desc: "Fresh ingredients, balanced taste.",
    img: item2,
  },
  {
    name: "Cheese Delight",
    desc: "Melty, creamy, irresistible.",
    img: item3,
  },
];

const BestSeller = () => {
  return (
    <div className="min-h-screen px-6 py-16">
      
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400"
        >
          Best Sellers
        </motion.h2>

        <p className="text-white/70 mt-4">
          Loved by everyone, made with care 💛
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">
                  {item.name}
                </h3>

                <p className="text-sm text-white/70 mt-2">
                  {item.desc}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-yellow-400/10"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BestSeller;
