import { Container } from './styled';

type Props = {
  name: string;
  image: string;
  fullName: string;
};

const Card = ({ name, image, fullName }: Props) => {
  return (
    <Container>
      {/* <div style={styles.card}> */}
        <h2>{name}</h2>
        <img src={image} alt={name} width={256} height={342} />
        <p>Full Name: {fullName}</p>
      {/* </div> */}
    </Container>
  );
};

export default Card;

const styles = {
  card: {
    border: '1px solid orange',
  },
};
