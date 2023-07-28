import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Articulo } from '../Interfaces/articulo';
import { ApiUrl } from '../Interfaces/config';

@Injectable({
    providedIn: 'root'
  })
  export class ArticuloService {

    constructor(private http:HttpClient) {}

    getArticulos():Observable<Articulo[]>{
        return this.http.get<Articulo[]>(ApiUrl+'articulo.php?function=getAll');
    }
  }