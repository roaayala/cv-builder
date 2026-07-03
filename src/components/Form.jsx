import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({ data, personalInformationHandlers }) {
  const { personalInformation } = data;
  return (
    <form>
      <PersonalInformationForm data={personalInformation} />
    </form>
  );
}
