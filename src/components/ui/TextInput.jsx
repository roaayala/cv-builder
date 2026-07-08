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
    <div className="flex flex-col gap-2">
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="border rounded-sm py-1 px-2 text-sm"
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
