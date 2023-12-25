import { Button } from "@/components/ui/button";
import Invoice from "./components/invoice";
import { usePDF } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: "invoice.pdf",
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
  });

  const handleDownloadPDF = () => {
    toPDF();
  };

  return (
    <div className="antialiased">
      <Button variant="outline" onClick={handleDownloadPDF}>
        Download PDF
      </Button>
      <div ref={targetRef}>
        <Invoice />
      </div>
    </div>
  );
}

export default App;
