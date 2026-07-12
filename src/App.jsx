import { useRef } from "react";
import { File, FileText, Share } from "lucide-react";
import Form from "./components/layouts/Form";
import Button from "./components/ui/Button";
import { Resume } from "./features/resume-preview";
import { useResume } from "./hooks/useResume";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";
import { useState } from "react";

export default function App() {
  const { resume, handlers } = useResume();
  const [isDownloading, setIsDownload] = useState(false);
  const resumeRef = useRef(null);

  const generatePDF = async () => {
    const target = resumeRef.current;

    if (!target) return;

    setIsDownload(true);

    try {
      const elementWidth = target.scrollWidth;
      const elementHeight = target.scrollHeight;

      const dataURL = await toPng(target, {
        pixelRatio: 2,
        backgroundColor: "#ffffff",
        width: target.scrollWidth,
        height: target.scrollHeight,
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = 210;
      const pdfHeight = 297;

      const ratio = Math.min(
        pdfWidth / elementWidth,
        pdfHeight / elementHeight,
      );

      const finalWidth = elementWidth * ratio;
      const finalHeight = elementHeight * ratio;

      const marginX = (pdfWidth - finalWidth) / 2;
      const marginY = (pdfHeight - finalHeight) / 2;

      pdf.addImage(dataURL, "PNG", marginX, marginY, finalWidth, finalHeight);

      pdf.save(`${resume.personalInformation.fullName || "CV"}_Resume.pdf`);
    } catch (err) {
      console.error("Fail to generate PDF: ", err);
    } finally {
      setIsDownload(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-100">
      <div className="h-full w-sm bg-white shadow-2xl z-10 shrink-0 flex flex-col">
        <Form data={resume} handlers={handlers} />

        <div className="p-6 flex flex-col gap-4 border-t border-t-neutral-200 shadow-md">
          <div className="grid grid-cols-1">
            <Button
              text={isDownloading ? "Downloading..." : "Download PDF"}
              icon={<Share size={18} />}
              variant="primary"
              disabled={isDownloading}
              onClick={generatePDF}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            <Button
              icon={<File size={18} />}
              text={"Reset"}
              variant="danger"
              onClick={handlers.resetResume}
            />

            <Button
              icon={<FileText size={18} />}
              text={"Use Template"}
              onClick={handlers.useResumeTemplate}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 h-full overflow-y-auto p-8 flex justify-center">
        <div ref={resumeRef}>
          <Resume data={resume} />
        </div>
      </div>
    </div>
  );
}
