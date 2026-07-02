export default function Header({ infomartion }) {
  const { name, jobTitle, address } = infomartion;
  return (
    <div>
      <h1>{name}</h1>
      <p>{jobTitle}</p>
      <p>{address}</p>
    </div>
  );
}
