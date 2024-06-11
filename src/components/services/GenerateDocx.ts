import axios from 'axios';
import { saveAs } from 'file-saver';

const generateDocx = async ({ 
  document, 
  username, 
  date, 
  time, 
  value1, 
  value2, 
  value3, 
  value4, 
  value5, 
  value6, 
  value7, 
  value8, 
  value9, 
  value10,
  modelSend
}: { 
  document: string, 
  username: string, 
  date: string, 
  time: string, 
  value1: string,   
  value2: string, 
  value3: string, 
  value4: string, 
  value5: string, 
  value6: string, 
  value7: string, 
  value8: string, 
  value9: string, 
  value10: string,
  modelSend: string
}) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:5000/generate-docx',
      { replacement_text: document, date, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, modelSend},
      { responseType: 'blob' }
    );

    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const fileURL = URL.createObjectURL(blob);
    saveAs(blob, 'modified_template.docx');

    const userHistoryKey = `downloadHistory_${username}`;
    const historyData = localStorage.getItem(userHistoryKey);
    const downloadHistory = historyData ? JSON.parse(historyData) : [];

    const newRecord = { username, date, time, document: fileURL };
    const updatedHistory = [...downloadHistory, newRecord];

    localStorage.setItem(userHistoryKey, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error generating DOCX:', error);
  }
};

export default generateDocx;
