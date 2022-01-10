import { useCallback, useEffect, useState } from 'react';
import * as api from '../../api/apiService';
import Card from '../../components/Card';
import SelectPowerstats from '../../components/SelectPowerstats';
import { Container, Content, InputField } from './styled';

function App() {
  const [heroName, setHeroName] = useState('');
  const [results, setResults] = useState<any>([]);
  const [powerStats, setPowerStats] = useState<any>([]);
  const [filterBy, setFilterBy] = useState('');

  const set = new Set();

  useEffect(() => {
    setResults(JSON.parse(localStorage.getItem(heroName)!));
    if (filterBy) {
      const newResult = [];
      for (const res of JSON.parse(localStorage.getItem(heroName)!)) {
        if (res.powerstats[filterBy] >= 0) {
          newResult.push(res);
        }
      }
      setResults(newResult);
    }
  }, [filterBy]);

  const handleHeroName = (event: any) => {
    setHeroName(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!heroName) {
      return;
    }
    try {
      set.clear();
      setPowerStats([]);
      let data;
      if (!localStorage.getItem(heroName)) {
        data = await api.getCharacter(heroName);
      } else {
        data = JSON.parse(localStorage.getItem(heroName)!);
      }
      setResults(data);
      localStorage.setItem(heroName, JSON.stringify(data));
      data.forEach((stats: any) => {
        for (const power of Object.keys(stats.powerstats)) {
          set.add(power);
        }
      });
      set.forEach((value) => {
        setPowerStats((previous: any) => [...previous, value]);
      });
    } catch (error) {
      console.warn('ERRO AO BUSCAR HEROI: ', error);
    }
  };

  // const handleFilter = useCallback(() => {

  // }, [filterBy]);

  const renderResult = () => {
    return results.map((value: any) => {
      return (
        <Card
          key={value.id}
          name={value.id + value.name}
          image={value.image.url}
          fullName={value.biography['full-name']}
        />
      );
    });
  };

  return (
    <Container>
      <Content>
        <h1>Super Heroes</h1>
        <form onSubmit={handleSubmit} style={{ border: '1px solid green' }}>
          <InputField>
            <input
              type="text"
              placeholder="Hero's name"
              value={heroName}
              onChange={handleHeroName}
            />
          </InputField>
          <button type="submit">Search</button>
          {results.length > 0 && (
            <SelectPowerstats filterBy={setFilterBy} options={powerStats} />
          )}
        </form>
        <div className="heroList" style={styles.list}>
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
      </Content>
    </Container>
  );
}

export default App;

const styles = {
  list: {
    margin: 'auto',
    width: '100%',
    diplay: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
  },
};
