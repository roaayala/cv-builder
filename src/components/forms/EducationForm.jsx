import { useState } from "react";
import Button from "../commons/Button";

export default function EducationForm({ information, handlers }) {
  const { education } = information;

  const [isAdd, setIsAdd] = useState(false);
  const [newEducation, setNewEducation] = useState({});

  const [editId, setEditId] = useState("");

  return (
    <div>
      <h3>Education</h3>

      {education < 1 ? (
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
              id="newEducation"
              type="text"
              placeholder="New Education"
              value={newEducation}
              onChange={(e) => {
                setNewEducation(e.target.value);
              }}
            />
          </div>
          <div>
            <Button
              text={"Cancel"}
              onClick={(e) => {
                e.preventDefault();
                setIsAdd(false);
                setNewEducation({});
              }}
            />
            <Button
              text={"Save"}
              onClick={(e) => {
                e.preventDefault();
                setIsAdd(false);
                setNewEducation({});
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
