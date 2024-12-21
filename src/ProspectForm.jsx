// filepath: /Users/vince/project/bolt-generated-project1/src/ProspectForm.jsx
import React, { useState } from 'react';
import './ProspectForm.css';

function ProspectForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting new prospect:', name);
    // Post new prospect to API
    fetch('/api/prospects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New prospect added:', data);
        setName('');
      });
  };

  return (
    <form className="prospect-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter prospect name"
      />
      <button type="submit">Add Prospect</button>
    </form>
  );
}

export default ProspectForm;