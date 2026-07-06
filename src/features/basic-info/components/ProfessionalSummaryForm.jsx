import FormSection from "../../../components/ui/FormSection";
import TextInputGroup from "../../../components/ui/TextInputGroup";

export default function ProfessionalSummaryForm({ data, handlers }) {
  return (
    <FormSection title={"Professional Summary"}>
      <TextInputGroup>
        <textarea
          name="professionalSummary"
          placeholder="Professional Summary"
          onChange={(e) => {
            handlers.professionalSummary(e);
          }}
          value={data}
          required
        />
      </TextInputGroup>
    </FormSection>
  );
}
