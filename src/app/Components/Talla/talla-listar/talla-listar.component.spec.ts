import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaListarComponent } from './talla-listar.component';

describe('TallaListarComponent', () => {
  let component: TallaListarComponent;
  let fixture: ComponentFixture<TallaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
