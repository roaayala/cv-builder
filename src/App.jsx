import { File, FileText, Share } from "lucide-react";
import Form from "./components/layouts/Form";
import Button from "./components/ui/Button";
import { Resume } from "./features/resume-preview";
import { useResume } from "./hooks/useResume";

export default function App() {
  const { resume, handlers } = useResume();

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-100">
      <div className="h-full w-sm bg-white shadow-2xl z-10 shrink-0 flex flex-col">
        <Form data={resume} handlers={handlers} />

        <div className="p-6 flex flex-col gap-4 border-t border-t-neutral-200 shadow-md">
          <div className="grid grid-cols-1">
            <Button
              text={"Export to PDF"}
              icon={<Share size={18} />}
              variant="primary"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            <Button
              icon={<File size={18} />}
              text={"Reset"}
              variant="danger"
              onClick={handlers.resetResume}
            />

            <Button
              icon={<FileText size={18} />}
              text={"Use Template"}
              onClick={handlers.useResumeTemplate}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 h-full overflow-y-auto p-8 flex justify-center">
        <Resume data={resume} />
      </div>
    </div>
  );
}
