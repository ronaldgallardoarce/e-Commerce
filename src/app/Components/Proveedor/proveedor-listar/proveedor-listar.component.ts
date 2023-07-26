import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/Interfaces/proveedor.interface';

@Component({
  selector: 'app-proveedor-listar',
  templateUrl: './proveedor-listar.component.html',
  styleUrls: ['./proveedor-listar.component.css']
})
export class ProveedorListarComponent implements OnInit {

  constructor(private provSvs:ProveedorService) { }
  proveedor: Proveedor[]=[]; 
  ngOnInit(): void {
    this.provSvs.getProveedor().subscribe(prov=>{
      this.proveedor=prov;
      console.log(this.proveedor)
    })
    
  }

}
