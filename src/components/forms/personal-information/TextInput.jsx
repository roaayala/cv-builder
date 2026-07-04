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
    <div className="flex flex-col">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        className=""
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
