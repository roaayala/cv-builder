export default function TextInput({
  id,
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
