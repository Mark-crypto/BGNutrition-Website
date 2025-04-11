import ImageRevealCard from "./ImageRevealCard";
import group1 from "../assets/group1.webp";
import group2 from "../assets/group2.webp";
import group3 from "../assets/group3.webp";

const Projects = () => {
  return (
    <>
      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Community Service
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <ImageRevealCard
            imageSrc={group1}
            title="Involvement in nutrition related research."
            description="Research is one of the main focus areas. This enables one to publish original research studies directly relevant to human nutrition. Creates and provides evidence-based interventions"
          />
          <ImageRevealCard
            imageSrc={group2}
            title="Community Engagement and enlightenment."
            description="Engagement in community activities such as provision of nutrition trainings, nutrition campaigns and free nutrition education and counseling services."
          />
          <ImageRevealCard
            imageSrc={group3}
            title="Mentoring undergraduate and postgraduate students."
            description="This is through motivating and encouraging students to progress in their studies as an excellent way to show my commitment, enthusiasm and skill in the role."
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
