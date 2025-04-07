import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Vision = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-green-600 w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            <Typewriter
              words={["Our Vision"]}
              loop={2}
              typeSpeed={40}
              delaySpeed={500}
              cursor
              cursorStyle="|"
            />
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          BG Nutrition envisions a community where everyone has access to good
          quality, nutritious food, understands the consequences of hunger and
          poor nutrition and is committed to creating a stronger, healthier
          nation.
        </p>
      </motion.div>
    </>
  );
};

export default Vision;
