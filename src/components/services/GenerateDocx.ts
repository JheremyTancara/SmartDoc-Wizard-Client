import axios from 'axios';
import { saveAs } from 'file-saver';

const generateDocx = async ({ document, value1, value2, value3, value4 }: 
  { document: string, value1: string, value2: string, value3: string, value4: string }) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/generate-docx',
      { replacement_text: document, value1, value2, value3, value4 },
      { responseType: 'blob' }
    );

    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, 'modified_template.docx');
  } catch (error) {
    console.error('Error generating DOCX:', error);
  }
};

export default generateDocx;
