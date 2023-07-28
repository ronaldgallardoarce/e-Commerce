import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrararticuloComponent } from './filtrararticulo.component';

describe('FiltrararticuloComponent', () => {
  let component: FiltrararticuloComponent;
  let fixture: ComponentFixture<FiltrararticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrararticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrararticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
