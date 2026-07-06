import { useState } from "react";
import FormHeader from "./FormHeader";
import Button from "../commons/Button";
import TextInput from "./TextInput";
import { Plus, Save, Edit, Trash2, X } from "lucide-react";
import PreviewList from "../commons/PreviewList";
import createEducation from "../../models/EducationModel";
import TextInputGroup from "../commons/TextInputGroup";

export default function EducationForm({ data, onEducationChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isAdd, setIsAdd] = useState(false);
  const [newEducation, setNewEducation] = useState(createEducation);

  const [editId, setEditId] = useState("");
  const [editedEducation, setEditedEducation] = useState(createEducation);

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
    setEditId(id);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();

    setNewEducation(createEducation());
    setEditId("");
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    onEducationChange.delete(id);
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
                      <TextInputGroup
                        groupTitle={"Edit Education"}
                      ></TextInputGroup>
                      <Button
                        icon={<Save />}
                        text={"Save Edit"}
                        onClick={(e) => {
                          handleSaveEdit(e);
                        }}
                      />
                      <Button
                        icon={<X />}
                        text={"Cancel Edit"}
                        onClick={handleCancelEdit}
                      />
                    </>
                  ) : (
                    <>
                      <p>{education.institute}</p>
                      <Button
                        icon={<Edit />}
                        onClick={(e) => {
                          handleEdit(e, education.id);
                        }}
                      />
                      <Button
                        icon={<Trash2 />}
                        onClick={(e) => {
                          handleDelete(e, education.id);
                        }}
                      />
                    </>
                  )}
                </li>
              ))
            )}
          </ul>

          <div>
            {isAdd && (
              <TextInputGroup groupTitle={"New Education"}>
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
              </TextInputGroup>
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
