import { useState } from "react";
import FormHeader from "./FormHeader";

export default function FormSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <FormHeader sectionTitle={title} isOpen={isOpen} onOpen={handleOpen} />

      {isOpen && <div>{children}</div>}
    </section>
  );
}
