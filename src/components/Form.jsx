import ContactForm from "./forms/ContactForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import SkillForm from "./forms/SkillForm";

export default function Form({ information, onChange, onContactChange }) {
  return (
    <>
      <form action="#" method="get">
        <PersonalInformationForm
          information={information}
          onChange={onChange}
        />

        <ContactForm information={information} onChange={onContactChange} />

        <SkillForm information={information} />
      </form>
    </>
  );
}
