import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const topics = [
  {
    title: "Best travel hacks for solo travelers",
    replies: 23,
    tag: "Tips & Tricks",
    tagColor: "from-green-400 to-blue-500"
  },
  {
    title: "How to plan a budget-friendly trip to Leh",
    replies: 15,
    tag: "Destinations",
    tagColor: "from-pink-400 to-purple-500"
  },
  {
    title: "Top 5 underrated places in South India",
    replies: 9,
    tag: "Hidden Gems",
    tagColor: "from-yellow-400 to-red-500"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ForumSection = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-20 text-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Conversation
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-12 px-4 max-w-2xl mx-auto leading-relaxed">
            Connect with fellow travelers, ask questions, and share your experiences in our buzzing travel community!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 relative"
            >
              <div
                className={`absolute -top-4 left-4 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${topic.tagColor} shadow-lg`}
              >
                {topic.tag}
              </div>
              <h3 className="text-lg font-semibold text-white mt-6 mb-3 group-hover:text-pink-300 transition-colors duration-300">
                {topic.title}
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                {topic.replies} replies
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/forum')}
            className="py-3 px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            Visit Forum
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default ForumSection;
