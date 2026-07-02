import { useState } from "react";

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
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
