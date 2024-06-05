import React, { useState, ChangeEvent } from "react";
import mammoth from "mammoth";
import { PDFDocument, StandardFonts } from "pdf-lib";

const DocxToPdfConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const convertToPdf = async () => {
    if (!file) {
      alert("Por favor selecciona un archivo DOCX.");
      return;
    }

    setLoading(true);

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const docxData = event.target?.result as ArrayBuffer;
        const result = await mammoth.convertToHtml({ arrayBuffer: docxData });
        const html = result.value; // Obtener el valor de la conversión

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
        page.setFont(helveticaFont);

        page.drawText(html, {
          x: 50,
          y: page.getHeight() - 50,
          size: 12,
        });

        const pdfBytes = await pdfDoc.save();
        const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);

        const downloadLink = document.createElement("a");
        downloadLink.href = pdfUrl;
        downloadLink.download = `${file.name.replace(/\.[^/.]+$/, "")}.pdf`;
        downloadLink.click();

        setLoading(false);
      };

      reader.readAsArrayBuffer(file);
    } catch (error: any) { // Aquí se asegura de que 'error' sea de tipo 'any'
      console.error("Error al convertir el documento:", error);
      if (error instanceof Error) { // Comprobación de tipo
        alert("Error durante la conversión: " + error.message);
      } else {
        alert("Error durante la conversión: " + String(error)); // Convertir 'error' a cadena si no es una instancia de 'Error'
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <button onClick={convertToPdf} disabled={!file || loading}>
        {loading ? "Convirtiendo..." : "Convertir a PDF"}
      </button>
    </div>
  );
};

export default DocxToPdfConverter;
