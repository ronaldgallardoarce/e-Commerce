import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from '../Interfaces/articulo';
import { ApiUrl } from '../Interfaces/config';
import { EstadoInicial } from '../Interfaces/estado-inicial';
import { ImagenArticulo } from '../Interfaces/imagen-articulo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    this.GetAllArticulos();
   }
  private InitialState:EstadoInicial={
    Articulos:[],
    DetalleArticulo:{},
    ImagenesArticulos:[]
  }
  private StateSubject = new BehaviorSubject<EstadoInicial>(this.InitialState);
  state$ =this.StateSubject.asObservable();
  
  GetAllArticulos(){
    try {
      const currentState=this.StateSubject.value;
      this.http.get(ApiUrl+'Articulo.php?function=getAllArticulos').subscribe(res=>{
        this.StateSubject.next({
          ...currentState,
          Articulos:<Articulo[]>res
        })
        this.GetImagenArticulos()
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  GetArticulo(id:any){
    try {
      const currentState=this.StateSubject.value;
      this.http.get(ApiUrl+`Articulo.php?function=getArticulo&id=${id}`).subscribe(res=>{
        this.StateSubject.next({
          ...currentState,
          DetalleArticulo:<Articulo>res
        })
        const dato=<Articulo>res
        this.StateSubject.value.DetalleArticulo.Imagenes=this.StateSubject.value.ImagenesArticulos.filter(
          (img:ImagenArticulo)=>img.IdArticulo===dato.Id)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  GetImagenArticulos(){
    try {
      const currentState=this.StateSubject.value;
      this.http.get(ApiUrl+'Articulo.php?function=getImagenArticulo').subscribe(res=>{
        this.StateSubject.next({
          ...currentState,
          ImagenesArticulos:<ImagenArticulo[]>res
        })
        this.StateSubject.value.Articulos.forEach((item:Articulo)=>{
          const x = this.StateSubject.value.ImagenesArticulos.filter((img:ImagenArticulo)=>img.IdArticulo===item.Id)
          item.Imagenes=this.StateSubject.value.ImagenesArticulos.filter((img:ImagenArticulo)=>img.IdArticulo===item.Id)
        })
      })
      
    } catch (error) {
      console.log(error)
    }
  }
}
