import { motion } from "framer-motion";
import { HeartPulse, Target } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const MissionVision = () => {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mission */}
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
            To empower individuals through personalized nutrition and wellness
            education, ensuring healthier lives for all.
          </p>
        </motion.div>

        {/* Vision */}
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
            To become a trusted partner in wellness, where science and care
            unite to create lasting health transformations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
