import { useState } from "react";
import Button from "../commons/Button";

export default function TextInput({
  id,
  label,
  placeholder,
  required = false,
  value,
  type = "text",
  onChange,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {isEdit ? (
        <div>
          <input
            required={required}
            id={id}
            placeholder={placeholder}
            name={id}
            value={value}
            type={type}
            onChange={onChange}
          />
          <Button text="Save" onClick={handleSave} />
        </div>
      ) : (
        <div>
          <p>{value}</p>
          <Button text="Edit" onClick={handleEdit} />
        </div>
      )}
    </div>
  );
}
