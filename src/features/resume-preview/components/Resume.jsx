import PersonalInformation from "./PersonalInformation";
import Contact from "./Contact";
import Skill from "./Skill";
import ProfessionalSummary from "./ProfessionalSummary";
import Education from "./Education";
import Employment from "./Employment";

export default function Resume({ data }) {
  const {
    personalInformation,
    contact,
    professionalSummary,
    skill,
    education,
    employment,
  } = data;
  return (
    <main className="w-[210mm] min-h-[297mm] bg-white p-[25.4mm] shadow-lg">
      <div className="flex flex-col">
        <PersonalInformation data={personalInformation} />
        <ProfessionalSummary data={professionalSummary} />
        <Skill data={skill} />
        <Education data={education} />
        <Employment data={employment} />
        <Contact data={contact} />
      </div>
    </main>
  );
}
