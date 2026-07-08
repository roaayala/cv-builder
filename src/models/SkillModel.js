export default function createSkill({ id, name = "" }) {
  return { id: id || crypto.randomUUID(), name };
}
