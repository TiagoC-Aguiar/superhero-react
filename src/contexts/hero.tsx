import React, { createContext, useState, useContext } from 'react';
import { useSearch } from '../contexts';

import {SuperheroType} from '../types';

type HeroContextData = {
  hero: SuperheroType;
  getHero: (id: number) => void;
};

const HeroContext = createContext<HeroContextData>({} as HeroContextData);

export const HeroProvider: React.FC = ({ children }) => {
  const [hero, setHero] = useState<SuperheroType>();
  const { heroName } = useSearch();

  const getHero = (id: number): void => {
    const heroStr = localStorage.getItem(heroName)!;
    const data: Array<SuperheroType> = JSON.parse(heroStr);
    const hero = data.filter((value: SuperheroType) => value.id === id)[0];
    setHero(hero);
  };

  return (
    <HeroContext.Provider
      value={{
        hero: hero!,
        getHero,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export function useHero() {
  const context = useContext(HeroContext);
  return context;
}
