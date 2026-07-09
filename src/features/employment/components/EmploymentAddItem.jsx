import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function EducationAddItem({ draft, actions }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <TextInput
          id={"newWorkplace"}
          label={"Workplace"}
          placeholder={"Workplace"}
          name={"workplace"}
          value={draft.workplace}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          id={"newRole"}
          label={"Role"}
          placeholder={"Role"}
          name={"role"}
          value={draft.degree}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          type={"number"}
          id={"newStartYear"}
          label={"Start Year"}
          placeholder={"Start Year"}
          name={"startYear"}
          value={draft.startYear}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          type={"number"}
          id={"newEndYear"}
          label={"End Year"}
          placeholder={"End Year"}
          name={"endYear"}
          value={draft.endYear}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button
          icon={<X size={18} />}
          text={"Cancel"}
          onClick={(e) => {
            e.preventDefault();
            actions.handleCancel();
          }}
        />
        <Button
          icon={<Save size={18} />}
          variant="primary"
          text={"Save"}
          onClick={(e) => {
            e.preventDefault();
            actions.handleSaveAdd(["workplace", "role", "startYear"]);
          }}
        />
      </div>
    </div>
  );
}
