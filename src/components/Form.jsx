import ContactForm from "./forms/ContactForm";
import EducationForm from "./forms/EducationForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import SkillForm from "./forms/SkillForm";

export default function Form({
  information,
  onChange,
  onContactChange,
  skillHandlers,
  educationHandlers,
}) {
  return (
    <form action="#" method="get" className="w-88 flex flex-col gap-4">
      <PersonalInformationForm information={information} onChange={onChange} />
      <ContactForm information={information} onChange={onContactChange} />
      <SkillForm information={information} handlers={skillHandlers} />
      <EducationForm information={information} handlers={educationHandlers} />
    </form>
  );
}
