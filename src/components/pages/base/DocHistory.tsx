import React, { useState, useEffect } from 'react';
import Header from './header/Header';

interface DownloadHistory {
  username: string;
  date: string;
  time: string;
  document: string;
}

const DocHistory: React.FC = () => {
  const [downloadHistory, setDownloadHistory] = useState<DownloadHistory[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const username = localStorage.getItem('userLogged') || 'none';
    const userHistoryKey = `downloadHistory_${username}`;
    const historyData = localStorage.getItem(userHistoryKey);
    if (historyData) {
      setDownloadHistory(JSON.parse(historyData));
    }
  };

  return (
    <div className='body-color min-color'>
      <Header />
      <div className=''>
        <h1 className='title-manager-data ml-32 mt-1'>Historial de Descargas</h1>
        <table>
          <thead>
            <tr className='flex'>
              <th className='text-manager-data ml-2'>Nombre de usuario</th>
              <th className='text-manager-data ml-4'>Fecha</th>
              <th className='text-manager-data ml-16'>Hora</th>
              <th className='text-manager-data ml-17'>Documento</th>
            </tr>
          </thead>
          <tbody>
            {downloadHistory.map((record, index) => (
              <tr className='flex' key={index}>
                <div className='div-container ml-2 mr-4'>
                  <td className='text-data'>{record.username}</td>
                </div >
                <div className='div-container ml-2 mr-4'>
                  <td className='text-data'>{record.date}</td>
                </div>
                <div className='div-container ml-2 mr-4'>
                  <td className='text-data'>{record.time}</td>
                </div>
                <div className='ml-2 mr-4 mt-05'>
                  <td className='text-data-1'><a href={record.document} download>{record.document}</a></td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocHistory;
