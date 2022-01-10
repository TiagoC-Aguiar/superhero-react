import { useEffect, useState } from 'react';

import * as api from '../../api/apiService';
import Card from '../../components/Card';
import SelectPowerstats from '../../components/SelectPowerstats';
import { useSearch } from '../../contexts';

import { Container, Content, InputField } from './styled';

function Home() {
  const [heroName, setHeroName] = useState('');
  const [results, setResults] = useState<any>([]);
  const [powerStats, setPowerStats] = useState<any>([]);
  const [filterBy, setFilterBy] = useState('');

  const { setHeroName: globalHeroName } = useSearch();

  const set = new Set();

  useEffect(() => {
    if (filterBy && filterBy.length > 1) {
      const newResult = [];
      for (const res of JSON.parse(localStorage.getItem(heroName)!)) {
        if (res.powerstats[filterBy] >= 0) {
          newResult.push(res);
        }
      }
      setResults(newResult);
    }
    if (filterBy === '#') {
      setResults(JSON.parse(localStorage.getItem(heroName)!));
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
      globalHeroName(heroName);
    } catch (error) {
      console.warn('ERRO AO BUSCAR HEROI: ', error);
    }
  };

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

export default Home;

const styles = {
  list: {
    margin: 'auto',
    width: '100%',
    diplay: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
  },
};
