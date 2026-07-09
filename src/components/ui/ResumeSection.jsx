import ResumeHeader from "./ResumeHeader";

export default function ResumeSection({ headerChildren, bodyChildren }) {
  return (
    <section className="not-last-of-type:mb-[16pt]">
      <ResumeHeader>{headerChildren}</ResumeHeader>
      {bodyChildren}
    </section>
  );
}
