export default function TextInput({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        id={id}
        placeholder={placeholder}
        name={id}
        value={value}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
