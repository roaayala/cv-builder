import TextInput from "../../../components/ui/TextInput";
import FormSection from "../../../components/ui/FormSection";

export default function PersonalInformationForm({ data, handlers }) {
  const { fullName, jobTitle, location } = data;

  return (
    <FormSection title={"Personal Information"}>
      <div className="flex flex-col gap-4 py-4 ">
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
      </div>
    </FormSection>
  );
}
