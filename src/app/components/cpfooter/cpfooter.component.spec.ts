import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPfooterComponent } from './cpfooter.component';

describe('CPfooterComponent', () => {
  let component: CPfooterComponent;
  let fixture: ComponentFixture<CPfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
