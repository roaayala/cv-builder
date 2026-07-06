import {
  PersonalInformation,
  Contact,
  ProfessionalSummary,
  Skill,
  Education,
  Employment,
} from "../features/resume-preview";

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
