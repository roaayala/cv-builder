import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";

export default function App() {
  const [resume, setResume] = useState({
    name: "Budi Santoso",
    jobTitle: "Fullstack Web Developer",
    address: "Suryanata 22, Samarinda, Indonesia",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc leo, posuere eget odio et, pulvinar posuere ligula. Praesent cursus massa in nisl condimentum, eu faucibus turpis fringilla. Morbi tincidunt cursus ipsum non finibus. Quisque porta, metus et faucibus condimentum, neque orci interdum ipsum, nec luctus tellus nunc in tortor. Sed malesuada, lorem eu placerat tristique, quam est sollicitudin massa, sed semper ex magna sed ligula. Proin at nisi lorem.",
    contact: {
      email: "budisantoso@mail.com",
      phone: "62899 8888 7777",
      website: "budisantoso.personal",
    },
    skills: ["Wordpress Development", "Responsive Web Design"],
    education: [
      {
        institute: "Open University",
        description: "Bachelor of Information System",
        start: "2016",
        end: "2020",
      },
    ],
    employment: [
      {
        workplace: "Anti-Cancer Foundation",
        start: "2020",
        end: "2021",
      },
      {
        workplace: "Fintech Growth",
        start: "2021",
        end: "",
      },
    ],
  });

  const handleChange = (e) => {
    const editedResume = { ...resume, [e.target.name]: e.target.value };

    setResume(editedResume);
  };

  const handleContactChange = (e) => {
    const editedResume = {
      ...resume,
      contact: { ...resume.contact, [e.target.name]: e.target.value },
    };

    setResume(editedResume);
  };

  return (
    <>
      <Form
        information={resume}
        onChange={handleChange}
        onContactChange={handleContactChange}
      />
      <Resume information={resume} />
    </>
  );
}
