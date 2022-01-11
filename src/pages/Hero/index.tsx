import { useEffect, useState } from 'react';

import { Profile, Information } from '../../components';
import { useHero } from '../../contexts';
import Powerstats from './Powerstats';

import { Container, Content } from './styled';

let informations: Array<string> = [];

const HeroPage = () => {
  const [powerstats, setPowerstats] = useState<Array<string>>([]);
  const {
    hero: {
      biography,
      appearance,
      name,
      work,
      powerstats: heroPowerstats,
      image,
    },
  } = useHero();

  const imageData = { src: image.url, alt: name };

  useEffect(() => {
    informations = [];
    setInformations();
    setPowerstats([]);
    for (const [key, value] of Object.entries(heroPowerstats)) {
      const save = `${key}: ${value}`;
      if (Number(value)) {
        setPowerstats((previous) => [...previous, save]);
      }
    }
  }, []);

  const setInformations = () => {
    storeInformation('Full Name', biography['full-name']);
    storeInformation('Alter Egos', biography['alter-egos']);
    storeInformation('Place of Birth', biography['place-of-birth']);
    storeInformation('First Appearance', biography['first-appearance']);
    storeInformation('Publisher', biography['publisher']);
    storeInformation('Alignment', biography['alignment']);
    storeInformation('Gender', appearance['gender']);
    storeInformation('Race', appearance['race']);
    storeInformation('Occupation', work['occupation']);
  };

  const storeInformation = (
    info: string,
    value: string,
  ): void => {
    informations.push(info);
    informations.push(value);
  };

  return (
    <Container>
      <Content>
        <div className={'panel'}>
          <Profile imageData={imageData} name={name} isUpper />
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
            <Information infos={informations} />
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default HeroPage;
