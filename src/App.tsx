import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/pages/base/home/Home';
import AboutOf from './components/pages/base/about/AboutOf';
import GenerateDocument from './components/pages/compound/generate_document/GenerateDocument';
import Settings from './components/pages/base/Settings';
import ManagerData from './components/pages/base/ManagerData';
import DocHistory from './components/pages/base/DocHistory';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-of" element={<AboutOf />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/generate-document" element={<GenerateDocument />} />
          <Route path="/doc-history" element={<DocHistory />} />
          <Route path="/data-manager" element={<ManagerData />} />
        </Routes>
    </Router>
  );
}

export default App;
