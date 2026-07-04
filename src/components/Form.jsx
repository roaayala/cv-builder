import ContactForm from "./forms/ContactForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({
  data,
  onPersonalInformationChange,
  onContactChange,
}) {
  const { personalInformation, contact } = data;
  return (
    <form className="w-lg p-4">
      <PersonalInformationForm
        data={personalInformation}
        onPersonalInformationChange={onPersonalInformationChange}
      />

      <ContactForm data={contact} onContactChange={onContactChange} />
    </form>
  );
}
