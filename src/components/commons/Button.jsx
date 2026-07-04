export default function Button({ text, icon, onClick }) {
  return (
    <button className="" onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
}
