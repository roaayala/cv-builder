import ResumeSection from "../../../components/ui/ResumeSection";

export default function Employment({ data }) {
  return (
    <ResumeSection sectionTitle={"Employment"}>
      <ul className="flex flex-col gap-[10pt]">
        {data.map((employment) => (
          <li key={employment.id}>
            <div className="flex justify-between items-start mb-[2pt]">
              <h3 className="text-[11pt] text-gray-900 leading-snug">
                <span className="font-bold">{employment.role}</span>

                {employment.workplace && (
                  <span className="font-normal text-gray-800">
                    , {employment.workplace}
                  </span>
                )}
              </h3>

              <p className="text-[10pt] text-gray-600 whitespace-nowrap ml-[10pt] mt-[1pt]">
                <span>{employment.startYear}</span> -{" "}
                <span className="italic">
                  {employment.endYear ? employment.endYear : "Present"}
                </span>
              </p>
            </div>

            {employment.description && (
              <p className="text-[10pt] text-gray-700 leading-[1.6] whitespace-pre-line text-justify mt-[3pt]">
                {employment.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}
