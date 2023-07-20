import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grupo } from '../interfaces/grupo.interface';

@Injectable({
    providedIn: 'root'
  })
  export class GrupoService {
    private serverURL: string='http://localhost/ServidorPhpTiendaRopa/Grupo.php';

    constructor(private http:HttpClient) {}

    getGrupo():Observable<Grupo[]>{
        return this.http.get<Grupo[]>(this.serverURL+'?function=getAll');
    }
  }