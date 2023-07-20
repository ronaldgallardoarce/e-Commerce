import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Talla } from '../interfaces/talla.interface';

@Injectable({
    providedIn: 'root'
  })
  export class TallaService {
    private serverURL: string='http://localhost/ServidorPhpTiendaRopa/Talla.php';

    constructor(private http:HttpClient) {}

    getTallas():Observable<Talla[]>{
        return this.http.get<Talla[]>(this.serverURL+'?function=getAll');
    }

    postTalla(name: string, stock: number): Observable<Talla[]> {
        const data = { name: name, stock: stock };
        return this.http.post<Talla[]>(`${this.serverURL}?function=postTalla`, data);
      }
  }