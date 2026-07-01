import { useState } from "react";

export default function TextInput({
  id,
  label,
  placeholder,
  value,
  type = "text",
}) {
  const [name, setName] = useState(value);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={name}
        type={type}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
