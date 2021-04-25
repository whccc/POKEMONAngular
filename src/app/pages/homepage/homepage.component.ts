import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon.modelo';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  JsonPokemon: IPokemon = null;

  constructor(private PokemonService: PokemonsService) {}

  ngOnInit(): void {}

  public async onClicSearchPokemon(strPokemon: string) {
    try {
      //Inicializando pokemon a buscar
      this.PokemonService.setStrIdPokemon(strPokemon);
      //Busqueda del pokemon
      await this.PokemonService.getPokemon();
      //Asignar pokemon
      this.JsonPokemon = this.PokemonService.getJsonPokemon();
    } catch (Error) {
      this.JsonPokemon = null;
      console.error(Error);
    }
  }
}
