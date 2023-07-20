import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoListarComponent } from './grupo-listar.component';

describe('GrupoListarComponent', () => {
  let component: GrupoListarComponent;
  let fixture: ComponentFixture<GrupoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
