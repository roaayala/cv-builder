import { useState } from "react";

export default function TextareaInput({ id, label, placeholder, value }) {
  const [profile, setProfile] = useState(value);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setProfile(e.target.value)}
      >
        {profile}
      </textarea>
    </div>
  );
}
