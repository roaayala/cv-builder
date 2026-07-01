import TextInput from "./TextInput";

export default function ContactForm({ information, onChange }) {
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
        onChange={onChange}
      />

      <TextInput
        label="Phone"
        id="phone"
        placeholder="Phone"
        required={true}
        value={phone}
        onChange={onChange}
      />

      <TextInput
        label="Website"
        id="website"
        placeholder="Website"
        required={false}
        value={website}
        onChange={onChange}
      />
    </div>
  );
}
