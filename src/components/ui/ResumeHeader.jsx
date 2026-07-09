export default function ResumeHeader({ text }) {
  return (
    <h2
      className="
          text-[14pt]
          uppercase
          font-semibold
          text-gray-800
          border-b-[2pt]
          border-b-neutral-700
          mb-[8pt]
          mt-[12pt]
          inline-block
          "
    >
      {text}
    </h2>
  );
}
