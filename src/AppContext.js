import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageSize, setPageSize] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  // Add more state for filters and pagination if needed

  return (
    <AppContext.Provider
      value={{
        pageSize,
        setPageSize,
        searchQuery,
        setSearchQuery,
        // Provide more state values and functions here
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
