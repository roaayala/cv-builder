import PersonalInformation from "./resumes/PersonalInformation";

export default function Resume({ data }) {
  const { personalInformation } = data;
  return (
    <main className="w-full">
      <PersonalInformation data={personalInformation} />
    </main>
  );
}
