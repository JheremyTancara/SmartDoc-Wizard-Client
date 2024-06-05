import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/pages/base/home/Home';
import AboutOf from './components/pages/base/about/AboutOf';
import GenerateDocument from './components/pages/compound/generate_document/GenerateDocument';
import Settings from './components/pages/base/Settings';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-of" element={<AboutOf />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/generate-document" element={<GenerateDocument />} />
        </Routes>
    </Router>
  );
}

export default App;
