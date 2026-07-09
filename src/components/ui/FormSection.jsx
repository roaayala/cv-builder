import { useState } from "react";
import FormHeader from "./FormHeader";

export default function FormSection({ icon, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section className="px-4 py-2 border border-gray-200 shadow-lg rounded-lg flex flex-col gap-1">
      <FormHeader
        icon={icon}
        sectionTitle={title}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && <div>{children}</div>}
    </section>
  );
}
