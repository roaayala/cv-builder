export default function Button({ text, variant = "", onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
