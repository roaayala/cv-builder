import TextareaInput from "./TextareaInput";
import TextInput from "./TextInput";

export default function PersonalInformationForm({ information }) {
  return (
    <div>
      <h3>Personal Information</h3>
      <TextInput
        label="Name"
        id="name"
        placeholder="Name"
        required={true}
        value={information.name}
      />

      <TextInput
        label="Job Title"
        id="jobTitle"
        placeholder="Job Title"
        required={true}
        value={information.jobTitle}
      />

      <TextareaInput
        required={true}
        label="Profile"
        id="profile"
        placeholder="Profile"
        value={information.profile}
      />
    </div>
  );
}
