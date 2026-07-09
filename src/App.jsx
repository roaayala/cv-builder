import Form from "./components/layouts/Form";
import { Resume } from "./features/resume-preview";
import { useResume } from "./hooks/useResume";

export default function App() {
  const [resume, handlers] = useResume();

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-100">
      <div className="h-full w-sm bg-white shadow-2xl z-10 shrink-0">
        <Form data={resume} handlers={handlers} />
      </div>

      <div className="flex-1 h-full overflow-y-auto p-8 flex justify-center">
        <Resume data={resume} />
      </div>
    </div>
  );
}
