import LinkCard from "@/components/LinkCard";
import { BriefcaseBusiness, BookOpen, FolderOpen } from "lucide-react";

const Links = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <LinkCard
          title="Home"
          description="Go back to the homepage"
          to="/home"
          icon={<BriefcaseBusiness />}
        />
        <LinkCard
          title="Projects"
          description="See all your projects"
          to="/projects"
          icon={<FolderOpen />}
          gradientFrom="from-purple-400"
          gradientTo="to-indigo-600"
        />
        <LinkCard
          title="Resources"
          description="Browse learning materials"
          to="/resources"
          icon={<BookOpen />}
          gradientFrom="from-orange-400"
          gradientTo="to-pink-500"
        />
      </div>
    </>
  );
};

export default Links;
