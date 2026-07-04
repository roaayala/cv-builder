import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({ data, onPersonalInformationChange }) {
  const { personalInformation } = data;
  return (
    <form className="w-lg p-4">
      <PersonalInformationForm
        data={personalInformation}
        onPersonalInformationChange={onPersonalInformationChange}
      />
    </form>
  );
}
