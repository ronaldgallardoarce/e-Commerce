import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiUrl } from '../Interfaces/config';

@Injectable({
    providedIn: 'root'
  })
  export class ContactoService {

    constructor(private http:HttpClient) {}
    
    insertarContacto(contacto: any): Observable<any> {
        return this.http.post<any>(ApiUrl+'Contacto.php?function=insertarContacto', contacto);
      }
  }