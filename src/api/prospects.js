// filepath: /Users/vince/project/bolt-generated-project1/src/api/prospects.js
export const getProspects = async () => {
  // Exemple de données de prospects
  return [
    { id: 1, name: 'Prospect 1' },
    { id: 2, name: 'Prospect 2' },
  ];
};

export const createProspect = async (prospect) => {
  // Logique pour ajouter un nouveau prospect
  return { id: Date.now(), ...prospect };
};