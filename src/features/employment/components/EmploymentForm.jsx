import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import createEmployment from "../../../models/EmploymentModel";
import EmploymentEditItem from "./EmploymentEditItem";
import EmploymentReadItem from "./EmploymentReadItem";
import EmploymentAddItem from "./EmploymentAddItem";
import Button from "../../../components/ui/Button";
import { Plus } from "lucide-react";

export default function EmploymentForm({ data, handlers }) {
  const { isAdd, editId, draft, actions } = useListManager({
    handlers: handlers.education,
    generateEmptyTemplate: () => createEmployment(),
  });
  return (
    <FormSection title={"Employment"}>
      <ul>
        {data.length === 0 ? (
          <li>No Employment added!</li>
        ) : (
          data.map((employment) => (
            <li key={employment.id}>
              {editId === employment.id ? (
                <EmploymentEditItem draft={draft} actions={actions} />
              ) : (
                <EmploymentReadItem employment={employment} actions={actions} />
              )}
            </li>
          ))
        )}
      </ul>

      {isAdd && <EmploymentAddItem draft={draft} actions={actions} />}

      {!isAdd && !editId && (
        <div>
          <Button
            icon={<Plus />}
            text={"Add Employment"}
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
