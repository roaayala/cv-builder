import { useState } from "react";

export default function useListManager({ handlers, generateEmptyTemplate }) {
  const [isAdd, setIsAdd] = useState(false);
  const [editId, setEditId] = useState(null);

  const [draft, setDraft] = useState(() => generateEmptyTemplate());

  const handleChange = (e) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setIsAdd(true);
    setEditId(null);
    setDraft(generateEmptyTemplate());
  };

  const handleSaveAdd = (keys) => {
    const prepareKeys = Array.isArray(keys) ? keys : [keys];
    const hasEmptyField = prepareKeys.some((key) => draft[key] === "");
    if (hasEmptyField) return;

    handlers.add(draft);

    setDraft(generateEmptyTemplate());
    setIsAdd(false);
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setIsAdd(false);
    setDraft(item);
  };

  const handleSaveEdit = (keys) => {
    const prepareKeys = Array.isArray(keys) ? keys : [keys];
    const hasEmptyField = prepareKeys.some((key) => draft[key] === "");

    if (hasEmptyField) return;

    handlers.edit(editId, draft);

    setEditId(null);
    setDraft(generateEmptyTemplate());
  };

  const handleDelete = (id) => {
    handlers.delete(id);
    setIsAdd(false);
  };

  const handleCancel = () => {
    setIsAdd(false);
    setEditId(null);
    setDraft(generateEmptyTemplate());
  };

  return {
    isAdd,
    editId,
    draft,
    actions: {
      handleChange,
      handleAdd,
      handleSaveAdd,
      handleEdit,
      handleSaveEdit,
      handleDelete,
      handleCancel,
    },
  };
}
