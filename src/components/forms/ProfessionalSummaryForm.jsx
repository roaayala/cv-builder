import { useState } from "react";
import FormHeader from "./FormHeader";

export default function ProfessionalSummaryForm({
  data,
  onProfessionalSummaryChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <section>
      <FormHeader
        sectionTitle={"Professional Summary"}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && (
        <main>
          <textarea
            name="professionalSummary"
            placeholder="Professional Summary"
            onChange={onProfessionalSummaryChange}
            value={data}
            required
          />
        </main>
      )}
    </section>
  );
}
