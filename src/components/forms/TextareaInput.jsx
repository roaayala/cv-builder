import { useState } from "react";

export default function TextareaInput({
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
      <textarea name="" id=""></textarea>
    </div>
  );
}
