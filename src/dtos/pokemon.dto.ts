export interface PokemonDto {
  name: string;
  height: number;
  sprites: Sprites;
  stats: Stat[];
}

export interface Sprites {
  back_default: null | string;
  back_female: null;
  back_shiny: null | string;
  back_shiny_female: null;
  front_default: null | string;
  front_female: null;
  front_shiny: null | string;
  front_shiny_female: null;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
