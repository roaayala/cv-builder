export default function PersonalInformation({ data }) {
  const { fullName, jobTitle, location } = data;
  return (
    <section>
      <h1>{fullName}</h1>
      <p>{jobTitle}</p>
      <p>{location}</p>
    </section>
  );
}
