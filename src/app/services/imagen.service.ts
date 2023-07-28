import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiUrl } from '../Interfaces/config';
import { Imagen } from '../Interfaces/imagen.interfece';

@Injectable({
    providedIn: 'root'
  })
  export class ImagenService {

    constructor(private http:HttpClient) {}

    getImagen():Observable<Imagen[]>{
<<<<<<< HEAD
        return this.http.get<Imagen[]>(ApiUrl+'ImagenArticulo.php?function=getAll');
=======
        return this.http.get<Imagen[]>(ApiUrl+'imagenarticulo.php?function=getAll');
>>>>>>> 84397b9ac0c6625f75ba9226ac886c5c17671cdf
    }
  }