import ResumeSection from "../../../components/ui/ResumeSection";

export default function ProfessionalSummary({ data }) {
  return (
    <ResumeSection sectionTitle={"Professional Summary"}>
      <p className="text-[10pt] text-gray-800 leading-[1.6] whitespace-pre-line text-justify">
        {data}
      </p>
    </ResumeSection>
  );
}
