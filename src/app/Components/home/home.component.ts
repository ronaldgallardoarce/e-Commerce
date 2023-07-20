import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Interfaces/articulo';
import { ImagenArticulo } from 'src/app/Interfaces/imagen-articulo';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Articulos:Articulo[]=[]
  ImagenArticulos:ImagenArticulo[]=[]
  imagenesMostradas: { [key: number]: boolean } = {};

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.state$.subscribe(state=>{
      if(state.Articulos){
        this.Articulos=state.Articulos
        this.ImagenArticulos=state.ImagenesArticulos
        this.ImagenArticulos.forEach(imagen => {
          this.imagenesMostradas[imagen.Id] = false;
        });
      }
    })
  }
  
  isFirstImage(imagenId: number): boolean {
    if (this.imagenesMostradas[imagenId]) {
      return false;
    } else {
      this.imagenesMostradas[imagenId] = true;
      return true;
    }
  }
}
