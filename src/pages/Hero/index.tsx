import { useEffect, useState } from 'react';
import { useSearch } from '../../contexts';

const HeroPage = () => {
  const [heroData, setHeroData] = useState<any>({});
  const { heroName } = useSearch();

  useEffect(() => {
    const heroStr = localStorage.getItem(heroName)!;
    const data = JSON.parse(heroStr);
    const pathName = document.location.pathname;
    const path = pathName.split('/');
    const id = path[path.length-1];
    
    const hero = data.filter((value: any) => value.id === id)[0];
    setHeroData(hero);
  }, []);

  return <div>{heroData.name}</div>;
};

export default HeroPage;
