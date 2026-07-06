import { ChevronUp, ChevronDown } from "lucide-react";
import Button from "../commons/Button";

export default function FormHeader({ sectionTitle, isOpen, onOpen }) {
  return (
    <header
      className="flex justify-between align-middle cursor-pointer"
      onClick={onOpen}
    >
      <h2>{sectionTitle}</h2>
      {isOpen ? (
        <Button icon={<ChevronUp />} onClick={onOpen} />
      ) : (
        <Button icon={<ChevronDown />} onClick={onOpen} />
      )}
    </header>
  );
}
