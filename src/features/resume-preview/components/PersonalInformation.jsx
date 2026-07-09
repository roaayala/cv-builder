import ResumeSection from "../../../components/ui/ResumeSection";

export default function PersonalInformation({ data }) {
  const { fullName, jobTitle, location } = data;
  return (
    <ResumeSection>
      <h1 className="font-bold text-center text-4xl mb-2">{fullName}</h1>
      <div className="flex justify-center gap-8">
        <p>{jobTitle}</p>
        <p>{location}</p>
      </div>
    </ResumeSection>
  );
}
