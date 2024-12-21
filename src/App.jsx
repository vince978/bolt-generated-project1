import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import ProspectList from './ProspectList';
    import ProspectForm from './ProspectForm';

    function App() {
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
