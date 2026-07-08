import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function SkillAddItem({ draft, actions }) {
  return (
    <div>
      <div>
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
          icon={<X />}
          text={"Cancel"}
          onClick={(e) => {
            e.preventDefault();
            actions.handleCancel();
          }}
        />
        <Button
          icon={<Save />}
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
