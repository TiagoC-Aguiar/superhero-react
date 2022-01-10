import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://superheroapi.com/api/';
const token = '4736101066498710';

async function getCharacter(name: string): Promise<AxiosResponse<any, any>> {
  const res = await axios.get(
    `https://cors-anywhere.herokuapp.com/${API_URL + token}/search/${name}`
  );
  return res.data.results;
}

export { getCharacter };
