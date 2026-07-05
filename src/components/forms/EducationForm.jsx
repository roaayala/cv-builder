import { useState } from "react";
import FormHeader from "./FormHeader";
import Button from "../commons/Button";
import TextInput from "./TextInput";
import { Plus, Save, Edit, Trash2, X } from "lucide-react";
import PreviewList from "../commons/PreviewList";
import createEducation from "../../models/EducationModel";

export default function EducationForm({ data, onEducationChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isAdd, setIsAdd] = useState(false);
  const [newEducation, setNewEducation] = useState(createEducation);

  const [editId, setEditId] = useState("");
  const [editedEducation, setEditedEducation] = useState("");

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setNewEducation(createEducation());
    setIsAdd(true);
  };

  const handleSaveAdd = (e) => {
    e.preventDefault();

    if (newEducation.institute === "" || newEducation.degree === "") return;

    onEducationChange.add(newEducation);

    setNewEducation(createEducation());
    setIsAdd(false);
  };

  const handleCancelAdd = (e) => {
    e.preventDefault();

    setNewEducation(createEducation());
    setIsAdd(false);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <FormHeader
        sectionTitle={"Education"}
        isOpen={isOpen}
        onOpen={handleOpen}
      />

      {isOpen && (
        <>
          <ul>
            {data.length === 0 ? (
              <li>No education added</li>
            ) : (
              data.map((education) => (
                <li key={education.id}>
                  {editId === education.id ? (
                    <>
                      <input type="text" />
                      <Button icon={<Save />} onClick={handleSaveEdit} />
                    </>
                  ) : (
                    <>
                      <p>{education.institute}</p>
                      <Button icon={<Edit />} onClick={handleEdit} />
                      <Button icon={<Trash2 />} onClick={handleDelete} />
                    </>
                  )}
                </li>
              ))
            )}
          </ul>

          <div>
            {isAdd && (
              <div>
                <p>New Education</p>
                <TextInput
                  id={"institute"}
                  label={"Institute"}
                  placeholder={"Institute"}
                  value={newEducation.institute}
                  required={true}
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      institute: e.target.value,
                    });
                  }}
                />

                <TextInput
                  id={"degree"}
                  label={"Degree"}
                  placeholder={"Degree"}
                  value={newEducation.degree}
                  required={true}
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      degree: e.target.value,
                    });
                  }}
                />

                <TextInput
                  id={"start"}
                  label={"Start"}
                  placeholder={"Start"}
                  value={newEducation.start}
                  required={true}
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      start: e.target.value,
                    });
                  }}
                />

                <TextInput
                  id={"end"}
                  label={"End"}
                  placeholder={"End"}
                  value={newEducation.end}
                  required={true}
                  onChange={(e) => {
                    setNewEducation({
                      ...newEducation,
                      end: e.target.value,
                    });
                  }}
                />
              </div>
            )}

            {isAdd && (
              <>
                <Button
                  icon={<X />}
                  text={"Cancel"}
                  onClick={handleCancelAdd}
                />
                <Button icon={<Save />} text={"Save"} onClick={handleSaveAdd} />
              </>
            )}

            {!isAdd && !editId && (
              <Button
                icon={<Plus />}
                text={"Add Education"}
                onClick={handleAdd}
              />
            )}
          </div>
        </>
      )}
    </section>
  );
}
