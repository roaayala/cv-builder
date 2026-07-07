import FormSection from "../../../components/ui/FormSection";

export default function ProfessionalSummaryForm({ data, handlers }) {
  return (
    <FormSection title={"Professional Summary"}>
      <div>
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
