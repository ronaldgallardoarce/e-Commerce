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
        return this.http.get<Imagen[]>(ApiUrl+'ImagenArticulo.php?function=getAll');
    }
  }