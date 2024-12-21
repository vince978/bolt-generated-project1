// filepath: /Users/vince/project/bolt-generated-project1/src/ProspectList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useProspects } from './ProspectContext';
import './ProspectList.css';

function ProspectList() {
  const { prospects } = useProspects();

  return (
    <div className="prospect-container">
      <h1>Liste des Prospects</h1>
      <Link to="/prospects/new" className="add-button">
        Ajouter un prospect
      </Link>
      
      {prospects.length === 0 ? (
        <p>Aucun prospect trouvé</p>
      ) : (
        <ul className="prospect-list">
          {prospects.map(prospect => (
            <li key={prospect.id} className="prospect-item">
              <h3>{prospect.name}</h3>
              <p>{prospect.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProspectList;