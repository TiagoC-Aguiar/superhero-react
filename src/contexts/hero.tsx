import React, { createContext, useState, useContext } from 'react';
import {useSearch} from '../contexts';

type HeroContextData = {
  hero: any;
  setHero?: any;
};

const HeroContext = createContext<HeroContextData>({} as HeroContextData);

export const HeroProvider: React.FC = ({ children }) => {
  const [hero, setHero] = useState({});
  const {heroName} = useSearch();

  const getHero = (id: number) => {
    const heroStr = localStorage.getItem(heroName)!;
    const data = JSON.parse(heroStr);
    const hero = data.filter((value: any) => value.id === id)[0];
    console.log('HERO: ', hero);
    setHero(hero);
  }

  return (
    <HeroContext.Provider
      value={{
        hero,
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
