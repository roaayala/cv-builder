export default function Contact({ data }) {
  const { email, phone, website } = data;
  return (
    <section>
      <h2>Contact</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </section>
  );
}
