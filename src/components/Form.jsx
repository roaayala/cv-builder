import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function Form({ information }) {
  return (
    <>
      <form action="#" method="get">
        <PersonalInformationForm information={information} />
      </form>
    </>
  );
}
