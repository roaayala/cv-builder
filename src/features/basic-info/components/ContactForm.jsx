import TextInput from "../../../components/ui/TextInput";
import FormSection from "../../../components/ui/FormSection";
import TextInputGroup from "../../../components/ui/TextInputGroup";

export default function ContactForm({ data, handlers }) {
  const { email, phone, website } = data;

  return (
    <FormSection title={"Contact"}>
      <TextInputGroup>
        <TextInput
          id={"email"}
          label={"Email"}
          placeholder={"Email"}
          required={true}
          value={email}
          onChange={(e) => {
            handlers.contact(e);
          }}
        />

        <TextInput
          id={"phone"}
          label={"Phone"}
          placeholder={"Phone"}
          required={true}
          value={phone}
          onChange={(e) => {
            handlers.contact(e);
          }}
        />

        <TextInput
          id={"website"}
          label={"Website"}
          placeholder={"Website"}
          required={true}
          value={website}
          onChange={(e) => {
            handlers.contact(e);
          }}
        />
      </TextInputGroup>
    </FormSection>
  );
}
