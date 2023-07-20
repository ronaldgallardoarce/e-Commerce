import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Imagen } from '../interfaces/imagen.interfece';

@Injectable({
    providedIn: 'root'
  })
  export class ImagenService {
    private serverURL: string='http://localhost/ServidorPhpTiendaRopa/ImagenArticulo.php';

    constructor(private http:HttpClient) {}

    getImagen():Observable<Imagen[]>{
        return this.http.get<Imagen[]>(this.serverURL+'?function=getAll');
    }
  }