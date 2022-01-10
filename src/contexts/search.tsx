import React, { createContext, useState, useEffect, useContext } from 'react';

type SearchContextData = {
  heroName: string;
  setHeroName: any;
};

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export const SearchProvider: React.FC = ({ children }) => {
  const [heroName, setHeroName] = useState('');

  return (
    <SearchContext.Provider
      value={{
        heroName,
        setHeroName,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch() {
  const context = useContext(SearchContext);
  return context;
}
