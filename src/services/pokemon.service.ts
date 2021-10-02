import { HttpException } from '@exceptions/HttpException';
import * as dotEnv from 'dotenv';
import axios from 'axios';

dotEnv.config();

class PokemonService {
  private http = axios.create({
    baseURL: process.env.POKEMON_BASE_URL
  });

  private getRandomPokemonId(): number {
    return Math.floor( Math.random() * 890 ) + 1;
  }

  public async getPokemonById(pokemonId: number) {
    const response = await this.http.get(`/pokemon/${pokemonId}`);
    if (response.status === 200) {
      return response.data;
    }

    throw new HttpException(response.status, response.statusText);
  }

  public async getRandomPokemon() {
    return this.getPokemonById(this.getRandomPokemonId());
  }
}

export default PokemonService;
