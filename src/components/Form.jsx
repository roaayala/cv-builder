import ContactForm from "./forms/ContactForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import ProfessionalSummaryForm from "./forms/ProfessionalSummaryForm";
import SkillForm from "./forms/SkillForm";

export default function Form({
  data,
  onPersonalInformationChange,
  onContactChange,
  onProfessionalSummaryChange,
  onSkillChange,
}) {
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
      <PersonalInformationForm
        data={personalInformation}
        onPersonalInformationChange={onPersonalInformationChange}
      />

      <ContactForm data={contact} onContactChange={onContactChange} />

      <ProfessionalSummaryForm
        data={professionalSummary}
        onProfessionalSummaryChange={onProfessionalSummaryChange}
      />

      <SkillForm data={skill} onSkillChange={onSkillChange} />
    </form>
  );
}
