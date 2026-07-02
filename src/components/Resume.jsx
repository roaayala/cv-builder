import Contact from "./resumes/Contact";
import Header from "./resumes/Header";
import Profile from "./resumes/Profile";

export default function Resume({ information }) {
  return (
    <div>
      <Header infomartion={information} />
      <Profile information={information} />
      <Contact information={information} />
    </div>
  );
}
