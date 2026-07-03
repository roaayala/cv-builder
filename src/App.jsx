import { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";
import { EXAMPLE_RESUME } from "./utils";

export default function App() {
  const [resume, setResume] = useState(EXAMPLE_RESUME);

  const handlePersonalInformation = {};

  return (
    <div className="flex gap-4">
      <Form
        data={resume}
        personalInformationHandlers={handlePersonalInformation}
      />
      <Resume data={resume} />
    </div>
  );
}
