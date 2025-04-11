import { motion } from "framer-motion";
import { useState } from "react";
import face from "../assets/face.webp";

const TeamLead = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={face}
          alt="Team Lead"
          className="w-48 h-48 rounded-2xl object-cover shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">
            Team Lead: Prof. Agatha Christine
          </h2>
          <motion.div
            initial={{ height: 150 }}
            animate={{ height: expanded ? "auto" : 150 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden relative"
          >
            <p className="text-gray-700 leading-relaxed">
              Agatha, is an associate professor at Maseno University and holds
              an MSc (Community Nutrition and Development) and PhD (Community
              Nutrition and Development) from Maseno University. She is also a
              board member of SANI-Kenya a local NGO that deals with food
              security, sustainable, nutrition-sensitive agriculture, women
              empowerment and leadership development. She has 10 years
              experience in conducting food and nutrition research in Kenya,
              with a strong emphasis on food security, maternal and child
              nutrition. She has been involved in several research and community
              projects in East Kolwa location, Kisumu Central Sub-County and
              Seme Sub-County in Kenya. Agatha is engaged in a several
              collaborative research study. This includes Indigenous vegetables
              and food security, Childhood Obesity in Kenya, intervention study
              in Seme Sub-County and currently Consequences of COVID-19
              Preventive Measures on Food Security, Dietary Practices and
              Nutrition Outcomes. Agatha has participated in several surveys
              focusing on food security in Marsabit, Turkana, Bomet and Kisumu
              Counties in Kenya.
            </p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </motion.div>
          <button
            onClick={toggleExpanded}
            className="mt-3 text-green-600 hover:underline font-medium"
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>
      </div>
    </>
  );
};
export default TeamLead;
