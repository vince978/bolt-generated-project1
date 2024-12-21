import React, { useState } from 'react';

    function ProspectForm() {
      const [name, setName] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/prospects', { name })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };

      return (
        <div>
          <h1>Ajouter un prospect</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Nom :
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <button type="submit">Enregistrer</button>
          </form>
        </div>
      );
    }

    export default ProspectForm;
