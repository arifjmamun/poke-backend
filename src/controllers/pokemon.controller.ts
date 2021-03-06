import { JsonController, Param, Get, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';

import PokemonService from '@/services/pokemon.service';
import Auth0Middleware from '@/middlewares/auth0.middleware';
import { PokemonDto } from '@/dtos/pokemon.dto';

@JsonController('/pokemon')
@UseBefore(Auth0Middleware)
export class PokemonController {
  private pokemonService = new PokemonService();

  @Get('/random')
  @OpenAPI({ summary: 'Return a random pokemon' })
  async getRandomPokemon(): Promise<PokemonDto> {
    return this.pokemonService.getRandomPokemon();
  }

  @Get('/specified/:id')
  @OpenAPI({ summary: 'Return a specified pokemon by Id' })
  async getPokemonById(@Param('id') pokemonId: number): Promise<PokemonDto> {
    return this.pokemonService.getPokemonById(pokemonId);
  }
}
