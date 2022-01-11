import { useEffect, useState } from 'react';
import { Image } from '../';
import {ImageType} from '../../types';
import {Container} from './styled';

type Props = {
  children?: JSX.Element;
  imageData: ImageType;
  name: string;
  isUpper?: boolean
};

const Profile = ({ children, imageData, name, isUpper }: Props) => {
  const [heroName, setHeroName] = useState(name);

  useEffect(() => {
    if(isUpper) {
      setHeroName(name.toUpperCase());
    }
  }, []);

  return (
    <Container>
      <h2>{heroName}</h2>
      <Image 
        src={imageData.src}
        alt={imageData.alt}
        width={imageData.width}
        height={imageData.height}
      />
    </Container>
  );
};

export default Profile;
