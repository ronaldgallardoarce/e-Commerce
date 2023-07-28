import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiUrl } from '../Interfaces/config';
import { Grupo } from '../Interfaces/grupo.interface';

@Injectable({
    providedIn: 'root'
  })
  export class GrupoService {

    constructor(private http:HttpClient) {}

    getGrupo():Observable<Grupo[]>{
        return this.http.get<Grupo[]>(ApiUrl+'grupo.php?function=getAll');
    }
  }