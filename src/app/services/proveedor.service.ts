import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor.interface';

@Injectable({
    providedIn: 'root'
  })
  export class ProveedorService {
    private serverURL: string='http://localhost/ServidorPhpTiendaRopa/Proveedor.php';

    constructor(private http:HttpClient) {}

    getProveedor():Observable<Proveedor[]>{
        return this.http.get<Proveedor[]>(this.serverURL+'?function=getAll');
    }
  }