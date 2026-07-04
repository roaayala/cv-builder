export default function Button({ text, icon, onClick }) {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
