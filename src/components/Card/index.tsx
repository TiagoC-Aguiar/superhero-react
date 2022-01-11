import { useNavigate } from 'react-router-dom';

import { Profile } from '../../components';
import { useHero } from '../../contexts';
import { Container } from './styled';

type Props = {
  name: string;
  image: string;
  fullName: string;
  id: number;
};

const Card = ({ name, image, fullName, id }: Props) => {
  const navigate = useNavigate();
  const { getHero } = useHero();

  const imageData = { src: image, alt: name, width: 282, height: 376 };

  return (
    <Container
      onClick={() => {
        getHero(id);
        navigate(`/hero/${id}`);
      }}
    >
      <Profile imageData={imageData}>
        <h2>{name}</h2>
      </Profile>

      <p>Full Name: {fullName}</p>
    </Container>
  );
};

export default Card;
