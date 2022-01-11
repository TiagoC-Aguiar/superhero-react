import { useEffect, useState } from 'react';

import { Profile } from '../../components';
import { useHero } from '../../contexts';
import Powerstats from './Powerstats';

import { Container, Content } from './styled';

const HeroPage = () => {
  const [powerstats, setPowerstats] = useState<Array<string>>([]);
  const { hero } = useHero();

  const imageData = { src: hero.image.url, alt: hero.name };

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
    <Container>
      <Content>
        <div className={'panel'}>
          <Profile imageData={imageData} name={hero.name} isUpper />
        </div>
        <div className={'panel'}>
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
            <li>
              <strong>Occupation: </strong>
              {hero.work['occupation']}
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default HeroPage;
