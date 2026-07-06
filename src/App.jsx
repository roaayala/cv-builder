import Form from "./components/Form";
import { Resume } from "./features/resume-preview";
import { useResume } from "./hooks/useResume";

export default function App() {
  const [resume, handlers] = useResume();

  return (
    <div className="flex gap-4 h-screen">
      <Form data={resume} handlers={handlers} />
      <Resume data={resume} />
    </div>
  );
}
