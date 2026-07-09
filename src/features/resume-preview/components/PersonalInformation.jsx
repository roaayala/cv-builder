export default function PersonalInformation({ data }) {
  const { fullName, jobTitle, location } = data;
  return (
    <section className="mb-[15pt]">
      <h1 className="font-bold text-center text-[22pt] uppercase tracking-widest text-gray-900 mb-[2pt]">
        {fullName}
      </h1>

      <div className="flex justify-center items-center gap-[6pt] text-[11pt] text-gray-700">
        {jobTitle && (
          <span className="font-medium text-gray-800">{jobTitle}</span>
        )}

        {jobTitle && location && (
          <span className="text-[10pt] text-gray-400">•</span>
        )}

        {location && <span>{location}</span>}
      </div>
    </section>
  );
}
