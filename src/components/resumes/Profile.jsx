export default function Profile({ information }) {
  const { profile } = information;
  return (
    <div>
      <h2>Profile</h2>
      <p>{profile}</p>
    </div>
  );
}
