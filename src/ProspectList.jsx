// filepath: /Users/vince/project/bolt-generated-project1/src/ProspectList.jsx
import React, { useState, useEffect } from 'react';
import './ProspectList.css';

function ProspectList() {
  const [prospects, setProspects] = useState([]);

  useEffect(() => {
    console.log('Fetching prospects...');
    // Fetch prospects from API
    fetch('/api/prospects')
      .then(response => response.json())
      .then(data => {
        console.log('Prospects fetched:', data);
        setProspects(data);
      });
  }, []);

  return (
    <ul className="prospect-list">
      {prospects.map(prospect => (
        <li key={prospect.id}>{prospect.name}</li>
      ))}
    </ul>
  );
}

export default ProspectList;