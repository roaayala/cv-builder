import {
  PersonalInformationForm,
  ContactForm,
  ProfessionalSummaryForm,
} from "../../features/basic-info";

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
    <form className="w-lg flex flex-col gap-4 p-4">
      <PersonalInformationForm data={personalInformation} handlers={handlers} />
      <ContactForm data={contact} handlers={handlers} />
      <ProfessionalSummaryForm data={professionalSummary} handlers={handlers} />
    </form>
  );
}
