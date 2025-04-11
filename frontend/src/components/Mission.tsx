import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Mission = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <HeartPulse className="text-green-600 w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            <Typewriter
              words={["Our Mission"]}
              loop={2}
              typeSpeed={40}
              delaySpeed={500}
              cursor
              cursorStyle="|"
            />
          </h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          We are committed to eliminating hunger, malnutrition, and food
          insecurity by actively engaging the community and those we serve in
          developing solutions. we deliver innovative, research-based
          interventions and programs that promote healthier meal patterns.
        </p>
      </motion.div>
    </>
  );
};
export default Mission;
