import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit P.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "TravelGrid made my trip planning effortless and fun! The curated recommendations were spot-on and saved me hours of research.",
    rating: 5,
  },
  {
    name: "Sara L.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "The local guides and easy booking process exceeded my expectations. Will definitely use again for my next adventure!",
    rating: 5,
  },
  {
    name: "John D.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    review: "Loved the community features and 24/7 support. The platform is intuitive and the deals are unbeatable.",
    rating: 4,
  },
  {
    name: "Priya S.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "A beautiful, modern platform that made planning my dream vacation so much easier. Highly recommended!",
    rating: 5,
  },
];

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => (
  <section className="w-full py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Travelers Say</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied travelers who have discovered amazing destinations with TravelGrid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-pink-400 group-hover:border-pink-300 transition-colors duration-300"
            />
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-pink-300 transition-colors duration-300">{t.name}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{t.review}</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className={`w-5 h-5 ${idx < t.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
