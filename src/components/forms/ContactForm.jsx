import TextInput from "./TextInput";

export default function ContactForm({ information }) {
  const { email, phone, website } = information.contact;
  return (
    <div>
      <h3>Contact</h3>
      <TextInput
        label="Email"
        id="email"
        placeholder="Email"
        type="email"
        required={true}
        value={email}
      />

      <TextInput
        label="Phone"
        id="phone"
        placeholder="Phone"
        required={true}
        value={phone}
      />

      <TextInput
        label="Website"
        id="website"
        placeholder="Website"
        required={false}
        value={website}
      />
    </div>
  );
}
