import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styled';

type Props = {
  name: string;
  image: string;
  fullName: string;
  id?: number;
};

const Card = ({ name, image, fullName, id }: Props) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/hero/${id}`)}>
      <h2>{name}</h2>
      <img src={image} alt={name} width={256} height={342} />
      <p>Full Name: {fullName}</p>
    </Container>
  );
};

export default Card;
