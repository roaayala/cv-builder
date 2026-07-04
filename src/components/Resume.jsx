import Contact from "./resumes/Contact";
import Education from "./resumes/Education";
import PersonalInformation from "./resumes/PersonalInformation";
import ProfessionalSummary from "./resumes/ProfessionalSummary";
import Skill from "./resumes/Skill";

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
      <Education data={education} />
      <Skill data={skill} />
      <Contact data={contact} />
    </main>
  );
}
