import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../Interfaces/articulo';
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
    ImagenesArticulos:[]
  }
  private StateSubject = new BehaviorSubject<EstadoInicial>(this.InitialState);
  state$ =this.StateSubject.asObservable();
  
  GetAllArticulos(){
    try {
      const currentState=this.StateSubject.value;
      this.http.get(environment.ApiUrl+'?function=getAll').subscribe(res=>{
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

  GetImagenArticulos(){
    try {
      const currentState=this.StateSubject.value;
      this.http.get(environment.ApiUrl+'?function=getImagenArticulo').subscribe(res=>{
        this.StateSubject.next({
          ...currentState,
          ImagenesArticulos:<ImagenArticulo[]>res
        })
      })
      
    } catch (error) {
      console.log(error)
    }
  }
}
