export default function createEmployment({
  id,
  workplace = "",
  role = "",
  startYear = "",
  endYear = "",
} = {}) {
  return {
    id: id || crypto.randomUUID(),
    workplace,
    role,
    startYear,
    endYear,
  };
}
