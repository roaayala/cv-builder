export default function Education({ data }) {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {data.map((education) => (
          <li key={education.id}>
            <h3>
              <span>{education.degree}</span> at {education.institute}
            </h3>
            <p>
              <span>{education.start}</span> - <span>{education.end}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
