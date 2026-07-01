import { useState } from "react";

export default function TextInput({
  id,
  label,
  placeholder,
  required = false,
  value,
  type = "text",
}) {
  const [name, setName] = useState(value);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        id={id}
        placeholder={placeholder}
        name={id}
        value={name}
        type={type}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
