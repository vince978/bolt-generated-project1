import axios from 'axios';

    export const getProspects = async () => {
      const response = await axios.get('/api/prospects');
      return response.data;
    };

    export const createProspect = async (prospect) => {
      const response = await axios.post('/api/prospects', prospect);
      return response.data;
    };
