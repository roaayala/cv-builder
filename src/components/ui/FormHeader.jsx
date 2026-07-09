import { ChevronUp, ChevronDown } from "lucide-react";
import Button from "./Button";

export default function FormHeader({ icon, sectionTitle, isOpen, onOpen }) {
  return (
    <header
      className="flex justify-between align-middle cursor-pointer"
      onClick={onOpen}
    >
      <h2 className="text-base font-semibold flex items-center gap-2">
        {icon && <span>{icon}</span>}
        <span>{sectionTitle}</span>
      </h2>
      <div>
        {isOpen ? (
          <Button icon={<ChevronUp />} onClick={onOpen} variant="ghost" />
        ) : (
          <Button icon={<ChevronDown />} onClick={onOpen} variant="ghost" />
        )}
      </div>
    </header>
  );
}
