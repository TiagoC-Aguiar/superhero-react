import { Image } from '../';
import {ImageType} from '../../types';
import {Container} from './styled';

type Props = {
  children: JSX.Element;
  imageData: ImageType;
};

const Profile = ({ children, imageData }: Props) => {
  return (
    <Container>
      {children}
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
