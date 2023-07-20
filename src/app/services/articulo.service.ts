import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Articulo } from '../interfaces/articulo.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ArticuloService {
    private serverURL: string='http://localhost/ServidorPhpTiendaRopa/Articulo.php';

    constructor(private http:HttpClient) {}

    getArticulos():Observable<Articulo[]>{
        return this.http.get<Articulo[]>(this.serverURL+'?function=getAll');
    }
  }