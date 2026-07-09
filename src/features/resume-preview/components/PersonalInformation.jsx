export default function PersonalInformation({ data }) {
  const { fullName, jobTitle, location } = data;
  return (
    <section className="mb-[16pt]">
      <h1 className="font-bold text-center text-[20pt] uppercase mb-[4pt]">
        {fullName}
      </h1>
      <div className="flex justify-center gap-[16pt] text-[12pt]">
        <p>{jobTitle}</p>
        <p>{location}</p>
      </div>
    </section>
  );
}
