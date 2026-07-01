import TextareaInput from "./TextareaInput";
import TextInput from "./TextInput";

export default function PersonalInformationForm({ information }) {
  const { name, jobTitle, profile, address } = information;
  return (
    <div>
      <h3>Personal Information</h3>
      <TextInput
        label="Name"
        id="name"
        placeholder="Name"
        required={true}
        value={name}
      />

      <TextInput
        label="Job Title"
        id="jobTitle"
        placeholder="Job Title"
        required={true}
        value={jobTitle}
      />

      <TextareaInput
        required={true}
        label="Profile"
        id="profile"
        placeholder="Profile"
        value={profile}
      />
      <TextareaInput
        required={true}
        label="Address"
        id="address"
        placeholder="Address"
        value={address}
      />
    </div>
  );
}
