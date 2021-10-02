import { Controller, Param, Get } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { User } from '@interfaces/users.interface';
import PokemonService from '@/services/pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  public pokemonService = new PokemonService();

  @Get('/random')
  @OpenAPI({ summary: 'Return a random pokemon' })
  async getRandomPokemon() {
    // TODO: implement
  }

  @Get('/specified/:id')
  @OpenAPI({ summary: 'Return a specified pokemon by Id' })
  async getUserById(@Param('id') userId: number) {
    // TODO: implement
  }
}
