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
        value={information.name}
      />

      <TextareaInput
        label="Profile"
        id="profile"
        placeholder="Profile"
        value={information.profile}
      />
    </div>
  );
}
