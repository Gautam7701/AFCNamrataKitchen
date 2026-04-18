import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaUtensils, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "Only the freshest ingredients, always.",
  },
  {
    icon: <FaHeart />,
    title: "Made with Love",
    desc: "Cooked with passion & care.",
  },
  {
    icon: <FaUtensils />,
    title: "Hygienic Cooking",
    desc: "Clean kitchen, safe food.",
  },
  {
    icon: <FaSmile />,
    title: "Happy Customers",
    desc: "Loved by hundreds daily.",
  },
];

const stats = [
  { number: "1000+", label: "Happy Customers" },
  { number: "50+", label: "Menu Items" },
  { number: "100%", label: "Hygiene" },
];

const WhyUs = () => {
  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          Why Choose Us
        </motion.h2>

        <p className="text-white/70 mt-4 max-w-xl mx-auto">
          Not just food, but an experience of taste and trust 💛
        </p>

        {/* 🔥 Stats Section */}
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-yellow-400">
                {stat.number}
              </h3>
              <p className="text-white/60 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 Feature Cards */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
  {features.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15 }}
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center group transition cursor-pointer hover:border-yellow-400/40 hover:bg-yellow-400/5"
    >
      <div className="text-yellow-400 text-3xl mb-4 flex justify-center group-hover:scale-125 transition">
        {item.icon}
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition">
        {item.title}
      </h3>
      <p className="text-sm text-white/70 mt-2">{item.desc}</p>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
};

export default WhyUs;