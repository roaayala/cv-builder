import { useState } from "react";
import TextInput from "./TextInput";
import FormHeader from "./FormHeader";

export default function PersonalInformationForm({ data, handlers }) {
  const { fullName, jobTitle, location } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section className="">
      <FormHeader
        sectionTitle={"Personal Information"}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && (
        <main className="">
          <TextInput
            id={"fullName"}
            label={"Full Name"}
            placeholder={"Full Name"}
            required={true}
            value={fullName}
            onChange={(e) => {
              handlers.personalInfo(e);
            }}
          />

          <TextInput
            id={"jobTitle"}
            label={"Job Title"}
            placeholder={"Job Title"}
            required={true}
            value={jobTitle}
            onChange={(e) => {
              handlers.personalInfo(e);
            }}
          />

          <TextInput
            id={"location"}
            label={"Location"}
            placeholder={"Location"}
            required={true}
            value={location}
            onChange={(e) => {
              handlers.personalInfo(e);
            }}
          />
        </main>
      )}
    </section>
  );
}
