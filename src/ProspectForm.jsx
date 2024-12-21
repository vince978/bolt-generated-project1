// filepath: /Users/vince/project/bolt-generated-project1/src/ProspectForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProspects } from './ProspectContext';
import './ProspectForm.css';

function ProspectForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { addProspect } = useProspects();

  const handleSubmit = (event) => {
    event.preventDefault();
    addProspect({ name, email });
    navigate('/');
  };

  return (
    <div className="form-container">
      <h1>Ajouter un Prospect</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ProspectForm;