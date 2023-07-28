import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalUser } from 'src/app/Interfaces/LocalUser';
import { Articulo } from 'src/app/Interfaces/articulo';
import { ApiUrl } from 'src/app/Interfaces/config';
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
      }
    })
    this.evaluteLogged();
  }
  
  isFirstImage(imagenId: number): boolean {
    if (this.imagenesMostradas[imagenId]) {
      return false;
    } else {
      this.imagenesMostradas[imagenId] = true;
      return true;
    }
    card?.addEventListener("mouseleave", (e) =>{
      imagen2?.classList.remove("active")
      imagen2?.classList.add("idle"+id)
      imagen?.classList.remove("idle"+id)
      imagen?.classList.add("active")
    })
  }
  
}
