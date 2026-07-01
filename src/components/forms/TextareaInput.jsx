import { useState } from "react";

export default function TextareaInput({
  id,
  label,
  placeholder,
  required = false,
  value,
  onChange,
}) {
  const [profile, setProfile] = useState(value);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {
          onChange(e);
          setProfile(e.target.value);
        }}
        value={profile}
      />
    </div>
  );
}
