import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Interfaces/articulo';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-filtrararticulo',
  templateUrl: './filtrararticulo.component.html',
  styleUrls: ['./filtrararticulo.component.css']
})
export class FiltrararticuloComponent implements OnInit {
  Articulos:Articulo[]=[]
 
  constructor(private dataService:DataService) { }

  
  ngOnInit(): void {
    this.dataService.state$.subscribe(state=>{
      if(state.Articulos){
        this.Articulos=state.Articulos
      }
    })
  }

  DetalleArticulo(id:any){
    this.dataService.GetArticulo(id)
  }
  EfectoImagen(id:any) {
    const card=document.querySelector(".card-"+id)
    let imagen = document.querySelector(".card-images .imagen-card"+id);
    let imagen2=document.querySelector(".idle"+id)
      if (imagen != null) {
      imagen.classList.remove("active")
      imagen.classList.add("idle"+id)
      imagen2?.classList.remove("idle"+id)
      imagen2?.classList.add("active")
    }
    card?.addEventListener("mouseleave", (e) =>{
      imagen2?.classList.remove("active")
      imagen2?.classList.add("idle"+id)
      imagen?.classList.remove("idle"+id)
      imagen?.classList.add("active")
    })
  }

}
