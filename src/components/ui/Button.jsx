export default function Button({ text, icon, onClick }) {
  return (
    <button
      className="cursor-pointer flex items-center gap-2"
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
