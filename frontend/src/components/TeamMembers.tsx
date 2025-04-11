import { Eye } from "lucide-react";
import face from "../assets/face.webp";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
};
type SelectedMemberType = {
  setSelectedMember: React.Dispatch<React.SetStateAction<TeamMember | null>>;
};
const teamMembers: TeamMember[] = [
  {
    name: "Fridah Wafula",
    position: "Enumerator",
    image: `${face}`,
    shortDescription: "Passionate about nutrition and health",
    fullDescription:
      "Fridah is an experienced nutrition researcher focused on conducting research and analyzing data. The data is then used by donor organizations to assign resources. ",
  },
  {
    name: "Lynn Akinyi",
    position: "Public Health",
    image: `${face}`,
    shortDescription: "Passionate about nutrition and health",
    fullDescription:
      "Fridah is an experienced nutrition researcher focused on conducting research and analyzing data. The data is then used by donor organizations to assign resources. ",
  },
  {
    name: "Mark Lee",
    position: "Pediatric Nurse",
    image: `${face}`,
    shortDescription: "Passionate about nutrition and health",
    fullDescription:
      "Fridah is an experienced nutrition researcher focused on conducting research and analyzing data. The data is then used by donor organizations to assign resources. ",
  },
];

const TeamMembers = ({ setSelectedMember }: SelectedMemberType) => {
  const openModal = (member: TeamMember) => setSelectedMember(member);
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="cursor-pointer relative bg-white border hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] rounded-2xl p-4 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.position}</p>
              <p className="text-xs text-gray-400 mt-1">
                {member.shortDescription}
              </p>
              <div className="absolute top-2 right-2 text-green-700">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-xs text-green-700 mt-2 italic font-semibold">
                Click for more info
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TeamMembers;
