export default function createSkill({ name }) {
  return { id: crypto.randomUUID(), name };
}
