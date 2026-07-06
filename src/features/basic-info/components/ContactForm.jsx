import { useState } from "react";
import FormHeader from "./FormHeader";
import TextInput from "./TextInput";

export default function ContactForm({ data, handlers }) {
  const { email, phone, website } = data;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <FormHeader
        sectionTitle={"Contact"}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && (
        <main className="">
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
        </main>
      )}
    </section>
  );
}
