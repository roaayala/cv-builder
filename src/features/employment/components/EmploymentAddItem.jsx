import { Save, X } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "../../../components/ui/TextInput";

export default function EducationAddItem({ draft, actions }) {
  return (
    <div>
      <div>
        <TextInput
          id={"newInstitute"}
          label={"Institute"}
          placeholder={"Institute"}
          name={"institute"}
          value={draft.institute}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <TextInput
          id={"newDegree"}
          label={"Degree"}
          placeholder={"Degree"}
          name={"degree"}
          value={draft.degree}
          onChange={(e) => {
            actions.handleChange(e);
          }}
        />

        <div>
          <TextInput
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
            actions.handleSaveAdd([
              "institute",
              "degree",
              "startYear",
              "endYear",
            ]);
          }}
        />
      </div>
    </div>
  );
}
