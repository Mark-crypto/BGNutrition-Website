import ImageRevealCard from "./ImageRevealCard";
import group1 from "../assets/group1.webp";
import group2 from "../assets/group2.webp";
import group3 from "../assets/group3.webp";

const Projects = () => {
  return (
    <>
      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Featured Projects
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <ImageRevealCard
            imageSrc={group1}
            title="Nutrition App"
            description="A health-focused platform tracking your meals and nutrients."
          />
          <ImageRevealCard
            imageSrc={group2}
            title="Smart Poultry Dashboard"
            description="Real-time insights and predictions for chicken layers."
          />
          <ImageRevealCard
            imageSrc={group3}
            title="Eco Tracker"
            description="Track your carbon footprint and environmental goals."
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
