import TextInput from "../../../components/ui/TextInput";
import FormSection from "../../../components/ui/FormSection";
import TextInputGroup from "../../../components/ui/TextInputGroup";

export default function PersonalInformationForm({ data, handlers }) {
  const { fullName, jobTitle, location } = data;

  return (
    <FormSection title={"Personal Information"}>
      <TextInputGroup>
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
      </TextInputGroup>
    </FormSection>
  );
}
