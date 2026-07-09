import ResumeSection from "../../../components/ui/ResumeSection";

export default function Skill({ data }) {
  return (
    <ResumeSection sectionTitle={"Skill"}>
      <ul className="flex flex-wrap gap-[3mm]">
        {data.map((skill) => (
          <li
            key={skill.id}
            className="text-[10pt] bg-neutral-100 border border-neutral-200 text-neutral-800 px-[3mm] py-[1mm] rounded-[1mm]"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
