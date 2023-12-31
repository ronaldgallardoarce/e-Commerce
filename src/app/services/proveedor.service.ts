import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiUrl } from '../Interfaces/config';
import { Proveedor } from '../Interfaces/proveedor.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ProveedorService {

    constructor(private http:HttpClient) {}

    getProveedor():Observable<Proveedor[]>{

        return this.http.get<Proveedor[]>(ApiUrl+'proveedor.php?function=getAll');

    }

    eliminarProveedor(id: any): Observable<any> {
      return this.http.get<any>(ApiUrl + `proveedor.php?function=eliminarProveedor&id=${id}`);
    }
  }
 