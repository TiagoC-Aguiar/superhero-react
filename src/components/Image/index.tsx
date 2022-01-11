type Props = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

const Image = ({ src, alt, width = '100%', height = '100%' }: Props) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Image;
