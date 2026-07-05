export default function createEducation({
  institute = "",
  degree = "",
  start = "",
  end = "",
} = {}) {
  return { id: crypto.randomUUID(), institute, degree, start, end };
}
