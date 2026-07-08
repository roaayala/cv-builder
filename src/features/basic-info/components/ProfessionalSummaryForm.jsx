import { FileText } from "lucide-react";
import FormSection from "../../../components/ui/FormSection";

export default function ProfessionalSummaryForm({ data, handlers }) {
  return (
    <FormSection icon={<FileText />} title={"Professional Summary"}>
      <div className="flex flex-col gap-4 py-4">
        <textarea
          name="professionalSummary"
          placeholder="Professional Summary"
          onChange={(e) => {
            handlers.professionalSummary(e);
          }}
          value={data}
          required
        />
      </div>
    </FormSection>
  );
}
