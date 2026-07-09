import ResumeSection from "../../../components/ui/ResumeSection";

export default function ProfessionalSummary({ data }) {
  return (
    <ResumeSection
      headerChildren={<h2>Professional Summary</h2>}
      bodyChildren={<p>{data}</p>}
    />
  );
}
