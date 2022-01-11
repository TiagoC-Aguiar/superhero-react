type InformationProps = {
  label: string;
  info: string;
};

type Props = {
  infos: Array<string>;
};

const Information = ({ label, info }: InformationProps) => {
  return (
    <li>
      <strong>{label}: </strong>
      {info}
    </li>
  );
};

const Informations = ({ infos }: Props) => {  
  const renderInformation = () => {
    const output = [];
    for(let i=1;i<infos.length;i+=2) {
      output.push(<Information key={i} label={infos[i-1]} info={infos[i]} />);
    }
    return output;
  }

  return (
    <>
      {renderInformation()}
    </>
  );
};

export default Informations;
