import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LinkCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
}

const LinkCard: FC<LinkCardProps> = ({
  title,
  description,
  link,
  icon = <ArrowRight size={24} />,
  gradientFrom = "from-green-400",
  gradientTo = "to-emerald-600",
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white rounded-2xl shadow-lg p-6 w-full max-w-sm cursor-pointer`}
      onClick={() => navigate(link)}
    >
      <div className="flex items-center gap-4">
        <div className=" rounded-full p-3">{icon}</div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <a href={link} target="_blank">
          <button className="bg-white text-emerald-700 font-medium px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
            Visit
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default LinkCard;
