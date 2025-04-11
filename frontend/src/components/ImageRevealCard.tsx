import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageRevealCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageRevealCard: React.FC<ImageRevealCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-[300px] max-w-full "
      initial={{ borderRadius: 16 }}
    >
      <motion.div layout>
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      </motion.div>

      <motion.div layout className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition-all duration-300"
        >
          {expanded ? "Hide Details" : "View Details"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.p
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-3 text-gray-700 dark:text-gray-300 text-sm"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ImageRevealCard;
