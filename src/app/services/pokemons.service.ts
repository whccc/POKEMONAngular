import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon, IArrayPokemon } from '../models/pokemon.modelo';

@Injectable({
  providedIn: 'root',
})
//Services pokemons
export class PokemonsService {
  private strIdPokemon: string;
  private JsonPokemon: IPokemon = null;

  constructor(private http: HttpClient) {}

  public setStrIdPokemon(strIdPokemon: string) {
    this.strIdPokemon = strIdPokemon;
  }

  public getJsonPokemon() {
    return this.JsonPokemon;
  }

  public async getPokemon() {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${this.strIdPokemon}`;
      const Data: any = await this.http.get(URL).toPromise();
      console.log(Data);
      if (Data.forms) {
        this.JsonPokemon = Data.forms[0];
        this.JsonPokemon.url = Data.sprites.front_default;
        return;
      }
      this.JsonPokemon = null;
    } catch (Error) {
      throw Error;
    }
  }
}
