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

  const handleSaveAdd = () => {
    if (draft.name === "") return;
    handlers.add(draft);
    setDraft(generateEmptyTemplate());
    setIsAdd(false);
  };

  const handleCancelAdd = () => {
    setIsAdd(false);
    setDraft(generateEmptyTemplate());
  };

  const handleEdit = () => {};

  const handleSaveEdit = () => {};

  const handleCancelEdit = () => {};

  return {
    isAdd,
    editId,
    draft,
    actions: {
      handleChange,
      handleAdd,
      handleSaveAdd,
    },
  };
}
