import { useState } from "react";
import Button from "../commons/Button";

export default function TextareaInput({
  id,
  label,
  placeholder,
  required = false,
  value,
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
          <textarea
            name={id}
            id={id}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            value={value}
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
