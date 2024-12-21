import React, { createContext, useState, useContext } from 'react';

const ProspectContext = createContext();

export function ProspectProvider({ children }) {
  const [prospects, setProspects] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const addProspect = (prospect) => {
    setProspects(currentProspects => [
      ...currentProspects,
      { ...prospect, id: currentProspects.length + 1 }
    ]);
  };

  return (
    <ProspectContext.Provider value={{ prospects, addProspect }}>
      {children}
    </ProspectContext.Provider>
  );
}

export function useProspects() {
  const context = useContext(ProspectContext);
  if (!context) {
    throw new Error('useProspects must be used within a ProspectProvider');
  }
  return context;
}
