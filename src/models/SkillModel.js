export default function ({ name }) {
  return { id: crypto.randomUUID(), name };
}
