import ContactForm from "./forms/ContactForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import SkillForm from "./forms/SkillForm";

export default function Form({
  information,
  onChange,
  onContactChange,
  skillHandlers,
}) {
  return (
    <form action="#" method="get" className="w-88">
      <PersonalInformationForm information={information} onChange={onChange} />

      <ContactForm information={information} onChange={onContactChange} />

      <SkillForm information={information} handlers={skillHandlers} />
    </form>
  );
}
