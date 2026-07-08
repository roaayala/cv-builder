import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import createEmployment from "../../../models/EmploymentModel";
import EmploymentEditItem from "./EmploymentEditItem";
import EmploymentReadItem from "./EmploymentReadItem";
import EmploymentAddItem from "./EmploymentAddItem";
import Button from "../../../components/ui/Button";
import { BriefcaseBusiness, Plus } from "lucide-react";

export default function EmploymentForm({ data, handlers }) {
  const { isAdd, editId, draft, actions } = useListManager({
    handlers: handlers.employment,
    generateEmptyTemplate: () => createEmployment(),
  });
  return (
    <FormSection icon={<BriefcaseBusiness />} title={"Employment"}>
      <div className="flex flex-col gap-4 pb-4">
        <ul>
          {data.length === 0 ? (
            <li className="text-sm italic">No Employment added!</li>
          ) : (
            data.map((employment) => (
              <li key={employment.id}>
                {editId === employment.id ? (
                  <EmploymentEditItem draft={draft} actions={actions} />
                ) : (
                  <EmploymentReadItem
                    employment={employment}
                    actions={actions}
                  />
                )}
              </li>
            ))
          )}
        </ul>

        {isAdd && <EmploymentAddItem draft={draft} actions={actions} />}

        {!isAdd && !editId && (
          <div className="flex justify-end">
            <Button
              icon={<Plus size={16} />}
              variant="primary"
              text={"Add Employment"}
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
