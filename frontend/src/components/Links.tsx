import LinkCard from "@/components/LinkCard";
import { BriefcaseBusiness, BookOpen, FolderOpen } from "lucide-react";

const Links = () => {
  return (
    <>
      <h2 className="text-3xl font-bold my-6 text-center">Important Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <LinkCard
          title="Website"
          description="Visit our website."
          icon={<BriefcaseBusiness />}
          link="https://appv1.bgnutrition.co.ke/#/"
        />
        <LinkCard
          title="Enumerator"
          description="A link to our platform for data collection for enumerators."
          icon={<FolderOpen />}
          link="https://appv1.bgnutrition.co.ke/#/"
          gradientFrom="from-purple-400"
          gradientTo="to-indigo-600"
        />
        <LinkCard
          title="Data Manager"
          description="A link to our platform for data collection for data managers"
          icon={<BookOpen />}
          link="https://appv1.bgnutrition.co.ke/#/"
          gradientFrom="from-orange-400"
          gradientTo="to-pink-500"
        />
      </div>
    </>
  );
};

export default Links;
