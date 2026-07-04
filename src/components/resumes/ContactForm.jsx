export default function Contact({ data }) {
  const { email, phone, website } = data;
  return (
    <section>
      <h2 className="">{email}</h2>
      <p>{phone}</p>
      <p>{website}</p>
    </section>
  );
}
