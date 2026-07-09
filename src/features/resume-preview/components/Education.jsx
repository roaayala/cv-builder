import ResumeSection from "../../../components/ui/ResumeSection";

export default function Education({ data }) {
  return (
    <ResumeSection sectionTitle={"Education"}>
      <ul className="flex flex-col gap-[8pt]">
        {data.map((education) => (
          <li key={education.id}>
            <h3 className="text-[11pt] text-gray-900 leading-snug">
              <span className="font-bold">{education.degree}</span>

              {education.institute && (
                <span className="font-normal text-gray-800">
                  , {education.institute}
                </span>
              )}
            </h3>
            <p className="text-[10pt] text-gray-600 whitespace-nowrap ml-[10pt] mt-[1pt]">
              <span>{education.startYear}</span> -{" "}
              <span className="italic">
                {education.endYear ? education.endYear : "Present"}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
