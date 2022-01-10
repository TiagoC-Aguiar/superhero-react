import { useEffect, useState } from 'react';
import { useHero, useSearch } from '../../contexts';
import Powerstats from './Powerstats';

const HeroPage = () => {
  const [powerstats, setPowerstats] = useState<Array<string>>([]);

  const { hero } = useHero();

  useEffect(() => {
    for (const [key, value] of Object.entries(hero.powerstats)) {
      const save = `${key}: ${value}`;
      if (Number(value)) {
        setPowerstats((previous) => [...previous, save]);
      }
    }
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.profile}>
          <h1>{hero.name}</h1>
          <img src={hero.image.url} alt={hero.name} />
        </div>
        <div style={styles.informations}>
          <h2>Informations</h2>
          <ul>
            <li>
              <strong>Powerstats: </strong>
              {powerstats.map((value) => {
                return <Powerstats powerstats={value} />;
              })}
            </li>
            <li><strong>Full Name: </strong>{hero.biography['full-name']}</li>
          </ul>
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
  },
};
