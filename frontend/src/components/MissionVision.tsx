import Mission from "./Mission";
import Vision from "./Vision";

const MissionVision = () => {
  return (
    <section
      className="w-full py-12 px-4 md:px-12 bg-gradient-to-b from-white
     to-green-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <Mission />
        <Vision />
      </div>
    </section>
  );
};

export default MissionVision;
