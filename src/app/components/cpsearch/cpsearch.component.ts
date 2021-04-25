import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cpsearch',
  templateUrl: './cpsearch.component.html',
  styleUrls: ['./cpsearch.component.scss'],
})
export class CpsearchComponent implements OnInit {
  @Output() onClicSearchPokemon = new EventEmitter<string>();
  strSearchPokemon: string = '';
  constructor() {}

  ngOnInit(): void {}

  public onSearch() {
    this.onClicSearchPokemon.emit(this.strSearchPokemon);
  }
}
