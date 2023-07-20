import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenListarComponent } from './imagen-listar.component';

describe('ImagenListarComponent', () => {
  let component: ImagenListarComponent;
  let fixture: ComponentFixture<ImagenListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
