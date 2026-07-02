export default function Contact({ information }) {
  const { email, phone, website } = information.contact;

  return (
    <div>
      <h2>Contact</h2>
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{website}</li>
      </ul>
    </div>
  );
}
