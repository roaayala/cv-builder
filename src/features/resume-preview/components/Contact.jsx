import ResumeSection from "../../../components/ui/ResumeSection";

export default function Contact({ data }) {
  const { email, phone, website } = data;

  const contactItems = [email, phone, website].filter(Boolean);

  return (
    <ResumeSection sectionTitle={"Contact"}>
      <div className="flex flex-wrap items-center text-[10pt] text-gray-800">
        {contactItems.length === 0 ? (
          <p className="italic text-gray-400">
            No contact information provided.
          </p>
        ) : (
          contactItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <span>{item}</span>

              {index < contactItems.length - 1 && (
                <span className="mx-[6pt] text-gray-400 text-[8pt]">•</span>
              )}
            </div>
          ))
        )}
      </div>
    </ResumeSection>
  );
}
