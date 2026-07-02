export default function Button({ text, variant = "", onClick }) {
  return (
    <button
      className="text-white bg-blue-500 border border-blue-500 rounded-lg py-0.5 px-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
