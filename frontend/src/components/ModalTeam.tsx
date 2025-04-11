import { motion, AnimatePresence } from "framer-motion";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
};

type SetPropMemberType = {
  selectedMember: TeamMember | null;
  setSelectedMember: React.Dispatch<React.SetStateAction<TeamMember | null>>;
};

const ModalTeam = ({
  selectedMember,
  setSelectedMember,
}: SetPropMemberType) => {
  const closeModal = () => setSelectedMember(null);
  return (
    <>
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="text-xl font-semibold text-center">
                {selectedMember.name}
              </h4>
              <p className="text-sm text-center text-gray-500">
                {selectedMember.position}
              </p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {selectedMember.fullDescription}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ModalTeam;
