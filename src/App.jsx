// filepath: /Users/vince/project/bolt-generated-project1/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProspectList from './ProspectList';
import ProspectForm from './ProspectForm';
import { ProspectProvider } from './ProspectContext';
import './App.css';

function App() {
  return (
    <ProspectProvider>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProspectList />} />
            <Route path="/prospects/new" element={<ProspectForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ProspectProvider>
  );
}

export default App;