import { GraduationCap, Plus } from "lucide-react";
import Button from "../../../components/ui/Button";
import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import EducationEditItem from "./EducationEditItem";
import EducationReadItem from "./EducationReadItem";
import EducationAddItem from "./EducationAddItem";
import createEducation from "../../../models/EducationModel";

export default function EducationForm({ data, handlers }) {
  const { isAdd, editId, draft, actions } = useListManager({
    handlers: handlers.education,
    generateEmptyTemplate: () => createEducation(),
  });

  return (
    <FormSection icon={<GraduationCap />} title={"Education"}>
      <div className="flex flex-col gap-4 pb-4">
        <ul>
          {data.length === 0 ? (
            <li className="text-sm italic">No education added!</li>
          ) : (
            data.map((education) => (
              <li key={education.id}>
                {editId === education.id ? (
                  <EducationEditItem draft={draft} actions={actions} />
                ) : (
                  <EducationReadItem education={education} actions={actions} />
                )}
              </li>
            ))
          )}
        </ul>

        {isAdd && <EducationAddItem draft={draft} actions={actions} />}

        {!isAdd && !editId && (
          <div className="flex justify-end">
            <Button
              icon={<Plus size={16} />}
              variant="primary"
              text={"Add Education"}
              onClick={(e) => {
                e.preventDefault();
                actions.handleAdd();
              }}
            />
          </div>
        )}
      </div>
    </FormSection>
  );
}
