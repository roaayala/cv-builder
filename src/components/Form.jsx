import ContactForm from "./forms/ContactForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({ information }) {
  return (
    <>
      <form action="#" method="get">
        <PersonalInformationForm information={information} />
        <ContactForm information={information} />
      </form>
    </>
  );
}
