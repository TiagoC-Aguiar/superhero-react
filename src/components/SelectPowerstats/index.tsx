import { useEffect } from 'react';

type Props = {
  options: Array<string>;
  filterBy: any;
};

const SelectPowerstats = ({ options, filterBy }: Props) => {

  const handleFilter = (event: any) => {
    filterBy(event.target.value);
  };  

  return (
    <select style={{ marginLeft: 16, height: 36 }} onChange={handleFilter}>
      <option value="#">Select by Powerstats</option>
      {options.map((value) => {
        return <option key={value} value={value}>{value}</option>;
      })}
    </select>
  );
};

export default SelectPowerstats;
