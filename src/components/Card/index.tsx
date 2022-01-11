import { useNavigate } from 'react-router-dom';
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

  return (
    <Container
      onClick={() => {
        getHero(id);
        navigate(`/hero/${id}`);
      }}
    >
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h2>{name}</h2>
      </div>
      <img src={image} alt={name} width={282} height={376} />
      <p>Full Name: {fullName}</p>
    </Container>
  );
};

export default Card;
