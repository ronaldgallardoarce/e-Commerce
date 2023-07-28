import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiUrl } from '../Interfaces/config';
import { Talla } from '../Interfaces/talla.interface';

@Injectable({
    providedIn: 'root'
  })
  export class TallaService {

    constructor(private http:HttpClient) {}

    getTallas():Observable<Talla[]>{
        return this.http.get<Talla[]>(ApiUrl+'talla.php?function=getAll');
    }

    postTalla(name: string, stock: number): Observable<Talla[]> {
        const data = { name: name, stock: stock };
        return this.http.post<Talla[]>(`${ApiUrl}talla.php?function=postTalla`, data);
      }
  }