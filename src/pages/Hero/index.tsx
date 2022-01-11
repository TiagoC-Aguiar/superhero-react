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
    informations.push('Full Name');
    informations.push(biography['full-name']);
    informations.push('Alter Egos');
    informations.push(biography['alter-egos']);
    informations.push('Place of Birth');
    informations.push(biography['place-of-birth']);
    informations.push('First Appearance');
    informations.push(biography['first-appearance']);
    informations.push('Publisher');
    informations.push(biography['publisher']);
    informations.push('Alignment');
    informations.push(biography['alignment']);
    informations.push('Gender');
    informations.push(appearance['gender']);
    informations.push('Race');
    informations.push(appearance['race']);
    informations.push('Occupation');
    informations.push(work['occupation']);
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
