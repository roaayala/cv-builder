import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import { EXAMPLE_RESUME } from "./utils";

export default function App() {
  const [resume, setResume] = useState(EXAMPLE_RESUME);

  const handlePersonalInformationChange = (e) => {
    setResume({
      ...resume,
      personalInformation: {
        ...resume.personalInformation,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleContactChange = (e) => {
    setResume({
      ...resume,
      contact: {
        ...resume.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleProfessionalSummaryChange = (e) => {
    setResume({
      ...resume,
      professionalSummary: e.target.value,
    });
  };

  return (
    <div className="flex gap-4 h-screen">
      <Form
        data={resume}
        onPersonalInformationChange={handlePersonalInformationChange}
        onContactChange={handleContactChange}
        onProfessionalSummaryChange={handleProfessionalSummaryChange}
      />
      <Resume data={resume} />
    </div>
  );
}
