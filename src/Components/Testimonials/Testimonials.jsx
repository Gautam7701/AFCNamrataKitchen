import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "Priya S.", text: "Best grilled sandwich in Meerut! Super fresh and hygienic. Order kiya aur dil khush ho gaya.", stars: 5 },
  { name: "Rahul M.", text: "Namrata ji ka khana ghar jaisa lagta hai. Healthy bowl is my daily go-to!", stars: 5 },
  { name: "Sunita K.", text: "Amazing food, fast delivery, and the cheese delight is absolutely heavenly. Highly recommend!", stars: 5 },
  { name: "Ayush G.", text: "Ordered thali from the website — quality was really good and quantity was perfect. Worth it.", stars: 5 },
  { name: "Gautam K.", text: "Packaging was neat and food tasted fresh. Felt like proper homemade, not like outside food.", stars: 5 },
  { name: "Deepak S.", text: "Paneer curry was really tasty and not too oily. Will definitely order again.", stars: 5 },
  { name: "Ashwani R.", text: "Tried for the first time and honestly liked the taste. Simple, clean and satisfying meal.", stars: 5 },
  { name: "Rohit V.", text: "Delivery was a bit late but food quality made up for it. Tasted really fresh.", stars: 4 },
];

const Testimonials = () => {
  return (
    <div className="relative px-6 py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/5 blur-3xl rounded-full" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-yellow-400"
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-white/60 mt-4">Real love from real foodies 💛</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-yellow-400/30 transition"
            >
              <div className="flex gap-1 text-yellow-400 mb-3">
                {Array(r.stars).fill(0).map((_, j) => <FaStar key={j} size={14} />)}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">"{r.text}"</p>
              <p className="text-yellow-400 font-semibold text-sm mt-4">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;