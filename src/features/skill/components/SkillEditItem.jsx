import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function SkillEditItem({ draft, actions }) {
  return (
    <div>
      <div>
        <TextInput
          id={"editedSkillName"}
          label={"Edit Skill"}
          placeholder={"Skill"}
          name={"name"}
          value={draft.name}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />
      </div>

      <div>
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
            actions.handleSaveEdit("name");
          }}
        />
      </div>
    </div>
  );
}
