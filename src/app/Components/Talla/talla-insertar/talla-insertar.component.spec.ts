import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaInsertarComponent } from './talla-insertar.component';

describe('TallaInsertarComponent', () => {
  let component: TallaInsertarComponent;
  let fixture: ComponentFixture<TallaInsertarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallaInsertarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallaInsertarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
