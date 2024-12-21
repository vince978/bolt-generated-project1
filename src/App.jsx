// filepath: /Users/vince/project/bolt-generated-project1/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProspectList from './ProspectList';
import ProspectForm from './ProspectForm';
import './App.css';

function App() {
  console.log('Rendering App component...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProspectList />} />
        <Route path="/prospects/new" element={<ProspectForm />} />
      </Routes>
    </Router>
  );
}

export default App;