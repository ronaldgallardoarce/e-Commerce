import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorListarComponent } from './proveedor-listar.component';

describe('ProveedorListarComponent', () => {
  let component: ProveedorListarComponent;
  let fixture: ComponentFixture<ProveedorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
