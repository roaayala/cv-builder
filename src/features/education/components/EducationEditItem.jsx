import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function EducationEditItem({ draft, actions }) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <TextInput
          id={"editInstitute"}
          label={"Edit Institute"}
          placeholder={"Institute"}
          name={"institute"}
          value={draft.institute}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          id={"editDegree"}
          label={"Edit Degree"}
          placeholder={"Degree"}
          name={"degree"}
          value={draft.degree}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          type={"number"}
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
          type={"number"}
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
            actions.handleSaveEdit(["institute", "degree", "startYear"]);
          }}
        />
      </div>
    </div>
  );
}
