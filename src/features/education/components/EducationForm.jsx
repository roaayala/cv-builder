import { Plus } from "lucide-react";
import Button from "../../../components/ui/Button";
import FormSection from "../../../components/ui/FormSection";
import useListManager from "../../../hooks/useListManager";
import EducationEditItem from "./EducationEditItem";
import EducationReadItem from "./EducationReadItem";
import EducationAddItem from "./EducationAddItem";
import createEducation from "../../../models/EducationModel";

export default function EducationForm({ data, handlers }) {
  const { isAdd, editId, draft, actions } = useListManager({
    handlers: handlers.education,
    generateEmptyTemplate: () => createEducation(),
  });

  return (
    <FormSection title={"Education"}>
      <ul>
        {data.length === 0 ? (
          <li>No education added!</li>
        ) : (
          data.map((education) => (
            <li key={education.id}>
              {editId === education.id ? (
                <EducationEditItem draft={draft} actions={actions} />
              ) : (
                <EducationReadItem education={education} actions={actions} />
              )}
            </li>
          ))
        )}
      </ul>

      {isAdd && <EducationAddItem draft={draft} actions={actions} />}

      {!isAdd && !editId && (
        <div>
          <Button
            icon={<Plus />}
            text={"Add Education"}
            onClick={(e) => {
              e.preventDefault();
              actions.handleAdd();
            }}
          />
        </div>
      )}
    </FormSection>
  );
}

// return (
//   <section>
//     <FormHeader
//       sectionTitle={"Education"}
//       isOpen={isOpen}
//       onOpen={handleOpen}
//     />

//     {isOpen && (
//       <>
//         <ul>
//           {data.length === 0 ? (
//             <li>No education added</li>
//           ) : (
//             data.map((education) => (
//               <li key={education.id}>
//                 {editId === education.id ? (
//                   <>
//                     <TextInputGroup
//                       groupTitle={"Edit Education"}
//                     ></TextInputGroup>
//                     <Button
//                       icon={<Save />}
//                       text={"Save Edit"}
//                       onClick={(e) => {
//                         handleSaveEdit(e);
//                       }}
//                     />
//                     <Button
//                       icon={<X />}
//                       text={"Cancel Edit"}
//                       onClick={handleCancelEdit}
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <p>{education.institute}</p>
//                     <Button
//                       icon={<Edit />}
//                       onClick={(e) => {
//                         handleEdit(e, education.id);
//                       }}
//                     />
//                     <Button
//                       icon={<Trash2 />}
//                       onClick={(e) => {
//                         handleDelete(e, education.id);
//                       }}
//                     />
//                   </>
//                 )}
//               </li>
//             ))
//           )}
//         </ul>

//         <div>
//           {isAdd && (
//             <TextInputGroup groupTitle={"New Education"}>
//               <TextInput
//                 id={"institute"}
//                 label={"Institute"}
//                 placeholder={"Institute"}
//                 value={newEducation.institute}
//                 required={true}
//                 onChange={(e) => {
//                   setNewEducation({
//                     ...newEducation,
//                     institute: e.target.value,
//                   });
//                 }}
//               />

//               <TextInput
//                 id={"degree"}
//                 label={"Degree"}
//                 placeholder={"Degree"}
//                 value={newEducation.degree}
//                 required={true}
//                 onChange={(e) => {
//                   setNewEducation({
//                     ...newEducation,
//                     degree: e.target.value,
//                   });
//                 }}
//               />

//               <TextInput
//                 id={"start"}
//                 label={"Start"}
//                 placeholder={"Start"}
//                 value={newEducation.start}
//                 required={true}
//                 onChange={(e) => {
//                   setNewEducation({
//                     ...newEducation,
//                     start: e.target.value,
//                   });
//                 }}
//               />

//               <TextInput
//                 id={"end"}
//                 label={"End"}
//                 placeholder={"End"}
//                 value={newEducation.end}
//                 required={true}
//                 onChange={(e) => {
//                   setNewEducation({
//                     ...newEducation,
//                     end: e.target.value,
//                   });
//                 }}
//               />
//             </TextInputGroup>
//           )}

//           {isAdd && (
//             <>
//               <Button
//                 icon={<X />}
//                 text={"Cancel"}
//                 onClick={handleCancelAdd}
//               />
//               <Button icon={<Save />} text={"Save"} onClick={handleSaveAdd} />
//             </>
//           )}

//           {!isAdd && !editId && (
//             <Button
//               icon={<Plus />}
//               text={"Add Education"}
//               onClick={handleAdd}
//             />
//           )}
//         </div>
//       </>
//     )}
//   </section>
// );
