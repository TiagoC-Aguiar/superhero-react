import { useEffect, useState } from 'react';
import { useHero, useSearch } from '../../contexts';
import Powerstats from './Powerstats';

const HeroPage = () => {
  const [powerstats, setPowerstats] = useState<Array<string>>([]);

  const { hero } = useHero();

  useEffect(() => {
    setPowerstats([]);
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
              {powerstats.map((value, index) => {
                return <Powerstats key={index} powerstats={value} />;
              })}
            </li>
            <li>
              <strong>Full Name: </strong>
              {hero.biography['full-name']}
            </li>
            <li>
              <strong>Alter Egos: </strong>
              {hero.biography['alter-egos']}
            </li>
            <li>
              <strong>Place of Birth: </strong>
              {hero.biography['place-of-birth']}
            </li>
            <li>
              <strong>First Appearance: </strong>
              {hero.biography['first-appearance']}
            </li>
            <li>
              <strong>Publisher: </strong>
              {hero.biography['publisher']}
            </li>
            <li>
              <strong>Alignment: </strong>
              {hero.biography['alignment']}
            </li>
            <li>
              <strong>Gender: </strong>
              {hero.appearance['gender']}
            </li>
            <li>
              <strong>Race: </strong>
              {hero.appearance['race']}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
  },
  profile: {
    padding: 10,
  },
  informations: {
    padding: 10,
  },
};
