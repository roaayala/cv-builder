export default function createEducation({
  id,
  institute = "",
  degree = "",
  startYear = "",
  endYear = "",
} = {}) {
  return {
    id: id || crypto.randomUUID(),
    institute,
    degree,
    startYear,
    endYear,
  };
}
