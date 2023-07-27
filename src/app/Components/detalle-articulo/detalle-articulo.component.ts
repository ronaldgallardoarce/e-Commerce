import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Interfaces/articulo';
import { Talla } from 'src/app/Interfaces/talla.interface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent implements OnInit {

  Articulo:Articulo={
    Id: undefined,
    Nombre: '',
    Descripcion: '',
    Material: '',
    PrecioUnitario: undefined,
    CodigoBarras: undefined,
    CodigoProveedor: undefined,
    IdTalla: undefined,
    IdGrupo: undefined,
    IdProveedor: undefined,
    Color: '',
    Imagenes: []
  }
  Talla:Talla[]=[]
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.state$.subscribe(state=>{
      if(state.DetalleArticulo){
        this.Articulo=state.DetalleArticulo
        this.Talla=state.Talla
      }
    })
  }
  ImageEfect(id:any){
    let option=document.querySelector('.left-img')
    option?.querySelector(".active")?.classList.remove("active")
    document.querySelector(".left-img .option"+id)?.classList.add("active")
    document.querySelector(".img-center .active")?.classList.remove("active")
    document.querySelector(".img-center .img"+id)?.classList.add("active")
  }
}
