export default function createNewEducation({
  institute = "",
  description = "",
  start = "",
  end = "",
} = {}) {
  return { id: crypto.randomUUID(), institute, description, start, end };
}
