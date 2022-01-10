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
    const id = path[path.length - 1];

    const hero = data.filter((value: any) => value.id === id)[0];
    setHeroData(hero);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.profile}>
          <h1>{heroData.name}</h1>
          {/* <img src={heroData.image.url} alt={heroData.name} /> */}
        </div>
        <div style={styles.informations}>
          <h2>Informations</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

const styles = {
  container: {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
  },
  profile: {
    border: '1px solid green',
    padding: 10,
  },
  informations: {
    border: '1px solid green',
    padding: 10,
  }
};
