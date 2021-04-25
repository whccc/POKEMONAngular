import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon.modelo';

@Component({
  selector: 'app-cpcardpokemon',
  templateUrl: './cpcardpokemon.component.html',
  styleUrls: ['./cpcardpokemon.component.scss'],
})
export class CpcardpokemonComponent implements OnInit {
  JsonPokemonSearch: IPokemon = null;
  ShowNotFoundPokemon: boolean = false;

  @Input() set JsonPokemon(value: IPokemon) {
    this.getPokemonSearch(value);
  }

  constructor() {}

  ngOnInit(): void {}

  public getPokemonSearch(value: IPokemon) {
    try {
      if (value) {
        this.JsonPokemonSearch = value;
        this.ShowNotFoundPokemon = false;
      } else {
        this.JsonPokemonSearch = null;
        this.ShowNotFoundPokemon = true;
      }
    } catch (Error) {
      console.error(Error);
    }
  }
}
