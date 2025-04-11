import { useState } from "react";
import TeamLead from "./TeamLead";
import TeamMembers from "./TeamMembers";
import ModalTeam from "./ModalTeam";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
};

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  return (
    <section className="p-6 max-w-6xl mx-auto space-y-12">
      <TeamLead />
      <TeamMembers setSelectedMember={setSelectedMember} />
      <ModalTeam
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
    </section>
  );
}
