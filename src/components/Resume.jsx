import Contact from "./resumes/Contact";

export default function Resume({ information }) {
  return (
    <div>
      <Contact information={information} />
    </div>
  );
}
