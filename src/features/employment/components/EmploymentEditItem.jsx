import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function EmploymentEditItem({ draft, actions }) {
  return (
    <div>
      <div>
        <TextInput
          id={"editWorkplace"}
          label={"Edit Workplace"}
          placeholder={"Workplace"}
          name={"workplace"}
          value={draft.workplace}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          id={"editRole"}
          label={"Edit Role"}
          placeholder={"Role"}
          name={"role"}
          value={draft.role}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <div>
          <TextInput
            id={"editStartYear"}
            label={"Edit Start Year"}
            placeholder={"Start Year"}
            name={"startYear"}
            value={draft.startYear}
            onChange={(e) => {
              actions.handleChange(e);
            }}
          />

          <TextInput
            id={"editEndYear"}
            label={"Edit End Year"}
            placeholder={"End Year"}
            name={"endYear"}
            value={draft.endYear}
            onChange={(e) => {
              actions.handleChange(e);
            }}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          icon={<X />}
          text={"Cancel Edit"}
          onClick={(e) => {
            e.preventDefault();
            actions.handleCancel();
          }}
        />

        <Button
          icon={<Save />}
          text={"Save Edit"}
          onClick={(e) => {
            e.preventDefault();
            actions.handleSaveEdit([
              "workplace",
              "role",
              "startYear",
              "endYear",
            ]);
          }}
        />
      </div>
    </div>
  );
}
