import { ChevronUp, ChevronDown } from "lucide-react";
import Button from "./Button";

export default function FormHeader({ icon, sectionTitle, isOpen, onOpen }) {
  return (
    <header
      className="flex justify-between align-middle cursor-pointer"
      onClick={onOpen}
    >
      <h2 className="font-semibold">
        {icon && <span>{icon}</span>}
        <span>{sectionTitle}</span>
      </h2>
      {isOpen ? (
        <Button icon={<ChevronUp />} onClick={onOpen} />
      ) : (
        <Button icon={<ChevronDown />} onClick={onOpen} />
      )}
    </header>
  );
}
