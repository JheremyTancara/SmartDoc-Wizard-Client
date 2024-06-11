import React, { useState, ChangeEvent } from "react";
import mammoth from "mammoth";
import { PDFDocument } from "pdf-lib";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

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
        const html = result.value;

        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);

        const canvas = await html2canvas(container);
        const imageData = canvas.toDataURL('image/png');

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([canvas.width, canvas.height]);
        const image = await pdfDoc.embedPng(imageData);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: canvas.width,
          height: canvas.height,
        });

        document.body.removeChild(container);

        const pdfBytes = await pdfDoc.save();
        const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
        saveAs(pdfBlob, `${file.name.replace(/\.[^/.]+$/, "")}.pdf`);

        setLoading(false);
      };

      reader.readAsArrayBuffer(file);
    } catch (error: any) {
      console.error("Error al convertir el documento:", error);
      alert("Error durante la conversión: " + error.message);
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
