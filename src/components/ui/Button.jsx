export default function Button({
  text,
  icon,
  variant = "secondary",
  onClick,
  disabled,
}) {
  const baseStyle =
    "flex items-center justify-center gap-2 rounded-md font-medium";

  const paddingStyle = text ? "px-4 py-2 text-sm" : "p-2";

  const colorVariants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 focus:ring-gray-200",
    danger:
      "bg-white text-red-600 hover:bg-red-50 border border-red-200 focus:ring-red-500",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
  };

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";
  return (
    <button
      className={`${baseStyle} ${paddingStyle} ${colorVariants[variant]} ${disabledStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
