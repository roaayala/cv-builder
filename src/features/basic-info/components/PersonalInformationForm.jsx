import { useState } from "react";
import TextInput from "../../../components/ui/TextInput";
import FormSection from "../../../components/ui/FormSection";
import FormHeader from "../../../components/ui/FormHeader";

export default function PersonalInformationForm({ data, handlers }) {
  const { fullName, jobTitle, location } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <FormSection>
      <FormHeader
        sectionTitle={"Personal Information"}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && (
        <main>
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
    </FormSection>
  );
}
