export default function Contact({ information }) {
  const { email, phone, website } = information.contact;

  return (
    <>
      <h2>Contact</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </>
  );
}
