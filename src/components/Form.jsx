import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({ data, personalInformationHandlers }) {
  const { personalInformation } = data;
  return (
    <aside>
      <PersonalInformationForm data={personalInformation} />
    </aside>
  );
}
