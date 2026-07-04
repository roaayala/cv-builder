import Contact from "./resumes/Contact";
import Education from "./resumes/Education";
import Employment from "./resumes/Employment";
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
      <Skill data={skill} />
      <Education data={education} />
      <Employment data={employment} />
      <Contact data={contact} />
    </main>
  );
}
