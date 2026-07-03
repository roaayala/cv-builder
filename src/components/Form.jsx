import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({ data, onPersonalInformationChange }) {
  const { personalInformation } = data;
  return (
    <form className="w-88">
      <PersonalInformationForm
        data={personalInformation}
        onPersonalInformationChange={onPersonalInformationChange}
      />
    </form>
  );
}
