import TextInput from "../../../components/ui/TextInput";
import FormSection from "../../../components/ui/FormSection";
import { Contact } from "lucide-react";

export default function ContactForm({ data, handlers }) {
  const { email, phone, website } = data;

  return (
    <FormSection icon={<Contact />} title={"Contact"}>
      <div className="flex flex-col gap-2 pb-4 ">
        <TextInput
          id={"email"}
          label={"Email"}
          placeholder={"Email"}
          required={true}
          value={email}
          type={"email"}
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
      </div>
    </FormSection>
  );
}
