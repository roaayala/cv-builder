import {
  PersonalInformationForm,
  ContactForm,
  ProfessionalSummaryForm,
} from "../../features/basic-info";
import EducationForm from "../../features/education/components/EducationForm";
import { EmploymentForm } from "../../features/employment";
import { SkillForm } from "../../features/skill";

export default function Form({ data, handlers }) {
  const {
    personalInformation,
    contact,
    professionalSummary,
    skill,
    education,
    employment,
  } = data;
  return (
    <form className="h-full overflow-y-auto flex flex-col gap-6 p-6">
      <PersonalInformationForm data={personalInformation} handlers={handlers} />
      <ContactForm data={contact} handlers={handlers} />
      <ProfessionalSummaryForm data={professionalSummary} handlers={handlers} />
      <SkillForm data={skill} handlers={handlers} />
      <EducationForm data={education} handlers={handlers} />
      <EmploymentForm data={employment} handlers={handlers} />
    </form>
  );
}
