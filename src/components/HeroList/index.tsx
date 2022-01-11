import { Card } from '..';
import { SuperheroType } from '../../types';

type Props = {
  results: Array<SuperheroType>;
};

const HeroList = ({ results }: Props) => {
  const renderResult = () => {
    return results.map((value: any) => {
      return (
        <Card
          key={value.id}
          name={value.name}
          image={value.image.url}
          fullName={value.biography['full-name']}
          id={value.id}
        />
      );
    });
  };

  return (
    <>
      {results.length > 0 && (
        <div className="heroList">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {renderResult()}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroList;
