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
      <ul>
        {data.length === 0 ? (
          <li>No education added!</li>
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
        <div>
          <Button
            icon={<Plus />}
            text={"Add Education"}
            onClick={(e) => {
              e.preventDefault();
              actions.handleAdd();
            }}
          />
        </div>
      )}
    </FormSection>
  );
}
