import ContactForm from "./forms/ContactForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import ProfessionalSummaryForm from "./forms/ProfessionalSummaryForm";

export default function Form({
  data,
  onPersonalInformationChange,
  onContactChange,
  onProfessionalSummaryChange,
}) {
  const { personalInformation, contact, professionalSummary } = data;
  return (
    <form className="w-lg p-4">
      <PersonalInformationForm
        data={personalInformation}
        onPersonalInformationChange={onPersonalInformationChange}
      />
      <ContactForm data={contact} onContactChange={onContactChange} />

      <ProfessionalSummaryForm
        data={professionalSummary}
        onProfessionalSummaryChange={onProfessionalSummaryChange}
      />
    </form>
  );
}
