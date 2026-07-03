import PersonalInformation from "./resumes/PersonalInformation";

export default function Resume({ data }) {
  const { personalInformation } = data;
  return (
    <main>
      <PersonalInformation data={personalInformation} />
    </main>
  );
}
