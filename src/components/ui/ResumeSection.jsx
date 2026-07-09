import ResumeHeader from "./ResumeHeader";

export default function ResumeSection({ sectionTitle, children }) {
  return (
    <section className="not-last-of-type:mb-[16pt]">
      <ResumeHeader text={sectionTitle} />
      {children}
    </section>
  );
}
