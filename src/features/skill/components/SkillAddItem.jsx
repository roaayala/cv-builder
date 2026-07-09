import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function SkillAddItem({ draft, actions }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <TextInput
          id={"newSkillName"}
          label={"New Skill"}
          placeholder={"Skill"}
          name={"name"}
          value={draft.name}
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
            actions.handleSaveAdd("name");
          }}
        />
      </div>
    </div>
  );
}
