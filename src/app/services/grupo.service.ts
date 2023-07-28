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
<<<<<<< HEAD
        return this.http.get<Grupo[]>(ApiUrl+'Grupo.php?function=getAll');
=======
        return this.http.get<Grupo[]>(ApiUrl+'grupo.php?function=getAll');
>>>>>>> 84397b9ac0c6625f75ba9226ac886c5c17671cdf
    }
  }