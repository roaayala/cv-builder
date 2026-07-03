import { useState } from "react";
import Button from "../commons/Button";
import createNewEducation from "../../models/EducationModel";

export default function EducationForm({ information, handlers }) {
  const { education } = information;

  const [isAdd, setIsAdd] = useState(false);
  const [newEducation, setNewEducation] = useState(createNewEducation);

  const [editId, setEditId] = useState("");

  const handleInputChange = (e) => {
    setNewEducation({
      ...newEducation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>Education</h3>

      {education.length < 1 ? (
        <p>No education added</p>
      ) : (
        <ul>
          {education.map((ed) => (
            <li key={ed.id}>{ed.institute}</li>
          ))}
        </ul>
      )}

      {isAdd && (
        <div>
          <div>
            <input
              name="institute"
              id="institute"
              type="text"
              placeholder="Institute"
              value={newEducation.institute}
              onChange={handleInputChange}
            />

            <input
              name="description"
              id="description"
              type="text"
              placeholder="Description"
              value={newEducation.description}
              onChange={handleInputChange}
            />

            <input
              name="start"
              id="start"
              type="text"
              placeholder="Start"
              value={newEducation.start}
              onChange={handleInputChange}
            />

            <input
              name="end"
              id="end"
              type="text"
              placeholder="End"
              value={newEducation.end}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button
              text={"Cancel"}
              onClick={(e) => {
                e.preventDefault();
                setIsAdd(false);
                setNewEducation(createNewEducation());
              }}
            />
            <Button
              text={"Save"}
              onClick={(e) => {
                e.preventDefault();

                if (newEducation.institute.trim() === "") return;

                handlers.add(newEducation);

                setIsAdd(false);
                setNewEducation(createNewEducation());
              }}
            />
          </div>
        </div>
      )}

      {!isAdd && (
        <Button
          text={"Add"}
          onClick={(e) => {
            e.preventDefault();
            setIsAdd(true);
          }}
        />
      )}
    </div>
  );
}
