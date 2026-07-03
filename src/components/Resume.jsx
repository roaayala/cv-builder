import Contact from "./resumes/Contact";
import Education from "./resumes/Education";
import Employment from "./resumes/Employment";
import Header from "./resumes/Header";
import Profile from "./resumes/Profile";
import Skill from "./resumes/Skill";

export default function Resume({ information }) {
  return (
    <div className="flex-1">
      <Header infomartion={information} />
      <Profile information={information} />
      <Contact information={information} />
      <Skill information={information} />
      <Education information={information} />
      <Employment information={information} />
    </div>
  );
}
