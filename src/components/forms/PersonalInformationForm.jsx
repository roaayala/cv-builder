import { useState } from "react";
import Button from "../commons/Button";
import TextInput from "./personal-information/TextInput";

export default function PersonalInformationForm({
  data,
  onPersonalInformationChange,
}) {
  const { fullName, jobTitle, location } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <header className="flex justify-between items-center">
        <h2>Personal Information</h2>
        {isOpen ? (
          <Button text={"Hide Detail"} onClick={handleOpen} />
        ) : (
          <Button text={"Show Detail"} onClick={handleOpen} />
        )}
      </header>
      {isOpen && (
        <main>
          <TextInput
            id={"fullName"}
            label={"Full Name"}
            placeholder={"Full Name"}
            required={true}
            value={fullName}
            onChange={onPersonalInformationChange}
          />

          <TextInput
            id={"jobTitle"}
            label={"Job Title"}
            placeholder={"Job Title"}
            required={true}
            value={jobTitle}
            onChange={onPersonalInformationChange}
          />

          <TextInput
            id={"location"}
            label={"Location"}
            placeholder={"Location"}
            required={true}
            value={location}
            onChange={onPersonalInformationChange}
          />
        </main>
      )}
    </section>
  );
}
