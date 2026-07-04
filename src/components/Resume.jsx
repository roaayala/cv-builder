import Contact from "./resumes/ContactForm";
import PersonalInformation from "./resumes/PersonalInformation";

export default function Resume({ data }) {
  const { personalInformation, contact } = data;
  return (
    <main className="w-full">
      <PersonalInformation data={personalInformation} />
      <Contact data={contact} />
    </main>
  );
}
