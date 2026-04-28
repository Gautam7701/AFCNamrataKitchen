import { motion } from "framer-motion";

const services = [
  {
    title: "Kitty Parties",
    desc: "Perfect snacks & meals for your kitty gatherings. Fresh, tasty, and hassle-free.",
  },
  {
    title: "Birthday Parties",
    desc: "Delicious food that makes every birthday celebration more special and memorable.",
  },
  {
    title: "Family Gatherings",
    desc: "Homely meals for your loved ones — just like ghar ka khana, but better.",
  },
  {
    title: "College Fest",
    desc: "Affordable, tasty and quick service for college events and large groups.",
  },
];

const Catering = () => {
  return (
    <div className="px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400">
          We Cater For Every Occasion
        </h2>

        <p className="text-white/60 mt-4">
          From small gatherings to big celebrations, we’ve got you covered 💛
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catering;