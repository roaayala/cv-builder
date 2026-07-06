import ContactForm from "./forms/ContactForm";
import EducationForm from "./forms/EducationForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import ProfessionalSummaryForm from "./forms/ProfessionalSummaryForm";
import SkillForm from "./forms/SkillForm";

export default function Form({ data, handlers }) {
  const {
    personalInformation,
    contact,
    professionalSummary,
    skill,
    education,
    emplyoment,
  } = data;
  return (
    <form className="w-lg flex flex-col gap-4 p-4">
      <PersonalInformationForm data={personalInformation} handlers={handlers} />
      <ContactForm data={contact} handlers={handlers} />
      <ProfessionalSummaryForm data={professionalSummary} handlers={handlers} />
      <SkillForm data={skill} handlers={handlers} />
      <EducationForm data={education} handlers={handlers} />
    </form>
  );
}
