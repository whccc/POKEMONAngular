import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpsearchComponent } from './cpsearch.component';

describe('CpsearchComponent', () => {
  let component: CpsearchComponent;
  let fixture: ComponentFixture<CpsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
