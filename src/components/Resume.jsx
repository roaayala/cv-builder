import Contact from "./resumes/Contact";
import PersonalInformation from "./resumes/PersonalInformation";
import ProfessionalSummary from "./resumes/ProfessionalSummary";

export default function Resume({ data }) {
  const { personalInformation, contact, professionalSummary } = data;
  return (
    <main className="w-full flex flex-col gap-8">
      <PersonalInformation data={personalInformation} />
      <ProfessionalSummary data={professionalSummary} />
      <Contact data={contact} />
    </main>
  );
}
