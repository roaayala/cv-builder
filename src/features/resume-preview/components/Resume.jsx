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
    <main className="w-full flex flex-col gap-8">
      <PersonalInformation data={personalInformation} />
      <ProfessionalSummary data={professionalSummary} />
      <Skill data={skill} />
      <Education data={education} />
      <Employment data={employment} />
      <Contact data={contact} />
    </main>
  );
}
