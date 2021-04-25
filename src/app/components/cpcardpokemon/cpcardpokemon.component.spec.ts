import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcardpokemonComponent } from './cpcardpokemon.component';

describe('CpcardpokemonComponent', () => {
  let component: CpcardpokemonComponent;
  let fixture: ComponentFixture<CpcardpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpcardpokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpcardpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
