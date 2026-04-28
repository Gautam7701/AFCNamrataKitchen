import { motion } from "framer-motion";

const locations = ["Noida", "Delhi", "Ghaziabad"];

const DeliveryAreas = () => {
  return (
    <div className="px-6 py-20 bg-black/30">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          Bulk Orders Delivery
        </motion.h2>

        <p className="text-white/60 mt-4">
          We deliver bulk orders across Noida, Delhi & Ghaziabad 🚚
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {locations.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-lg font-medium hover:border-yellow-400/40 hover:text-yellow-400 transition"
            >
              📍 {city}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryAreas;