import { useState } from "react";
import Button from "../commons/Button";

export default function PersonalInformationForm({ data, handlers }) {
  const { fullName, jobTitle, location } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <header>
        <h2>Personal Information</h2>
        {isOpen ? (
          <Button text={"Hide Detail"} onClick={handleOpen} />
        ) : (
          <Button text={"Show Detail"} onClick={handleOpen} />
        )}
      </header>
      {isOpen ? <main>Edit Screen</main> : <main>Normal Screen</main>}
    </section>
  );
}
