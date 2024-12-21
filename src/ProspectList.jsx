import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    function ProspectList() {
      const [prospects, setProspects] = useState([]);

      useEffect(() => {
        axios.get('/api/prospects')
          .then(response => {
            setProspects(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

      return (
        <div>
          <h1>Prospects</h1>
          <ul>
            {prospects.map(prospect => (
              <li key={prospect.id}>
                {prospect.name}
              </li>
            ))}
          </ul>
          <a href="/prospects/new">Ajouter un prospect</a>
        </div>
      );
    }

    export default ProspectList;
