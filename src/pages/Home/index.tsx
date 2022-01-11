import { useEffect, useState } from 'react';

import * as api from '../../api/apiService';
import { HeroList, SelectPowerstats } from '../../components';
import { useSearch } from '../../contexts';

import { Container, Content, InputField } from './styled';
import { SuperheroType } from '../../types';

type TargetValueType = {
  value: string;
};

type SubmitType = {
  preventDefault: () => void;
};

type EventTargetType = {
  target: TargetValueType;
};

function Home() {
  const [heroName, setHeroName] = useState('');
  const [results, setResults] = useState<Array<SuperheroType>>([]);
  const [powerStats, setPowerStats] = useState<Array<string>>([]);
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

  const handleHeroName = ({ target }: EventTargetType) => {
    setHeroName(target.value);
  };

  const handleSubmit = async (event: SubmitType) => {
    event.preventDefault();
    if (!heroName) {
      return;
    }
    try {
      set.clear();
      setPowerStats([]);
      const data = await getSuperheroList();
      setStorage(data);
      set.forEach((value) => {
        setPowerStats((previous: any) => [...previous, value]);
      });
      globalHeroName(heroName);
    } catch (error) {
      console.warn('ERRO AO BUSCAR HEROI: ', error);
    }
  };

  const setStorage = (data: Array<SuperheroType>) => {
    setResults(data);
    localStorage.setItem(heroName, JSON.stringify(data));
    data.forEach((stats: SuperheroType) => {
      for (const power of Object.keys(stats.powerstats)) {
        set.add(power);
      }
    });
  };

  const getSuperheroList = async () => {
    let data;
    try {
      if (!localStorage.getItem(heroName)) {
        data = await api.getCharacter(heroName);
      } else {
        data = JSON.parse(localStorage.getItem(heroName)!);
      }
    } catch (error) {
      console.warn('Hero not found');
      data = [];
    }
    return data;
  };

  return (
    <Container>
      <Content>
        <h1>Super Heroes</h1>
        <form onSubmit={handleSubmit}>
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
        <HeroList results={results} />
      </Content>
    </Container>
  );
}

export default Home;
