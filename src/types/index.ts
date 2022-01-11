export type HeroCard = {
  name: string;
};

export type ImageType = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
};

export type PowerstatsType = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

type BiographyType = {
  'full-name': string;
  'alter-egos': string;
  aliases: Array<string>;
  'place-of-birth': string;
  'first-appearance': string;
  publisher: string;
  alignment: string;
};

type AppearanceType = {
  gender: string;
  race: string;
  height: Array<string>;
  weight: Array<string>;
  'eye-color': string;
  'hair-color': string;
};

type WorkType = {
  occupation: string;
  base: string;
};

type ConnectionsType = {
  'group-affiliation': string;
  relatives: string;
};

type ImageUrlType = {
  url: string;
}

export type SuperheroType = {
  id: string | number;
  name: string;
  powerstats: PowerstatsType;
  biography: BiographyType;
  appearance: AppearanceType;
  work: WorkType;
  connections: ConnectionsType;
  image: ImageUrlType;
};
