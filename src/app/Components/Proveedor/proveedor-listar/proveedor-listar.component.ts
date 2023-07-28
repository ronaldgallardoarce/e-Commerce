import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/interfaces/proveedor.interface';

@Component({
  selector: 'app-proveedor-listar',
  templateUrl: './proveedor-listar.component.html',
  styleUrls: ['./proveedor-listar.component.css']
})
export class ProveedorListarComponent implements OnInit {

  constructor(private provSvs:ProveedorService) { }
  proveedor: Proveedor[]=[]; 
  articulosSubscription: any;
  ngOnInit(): void {
    
    this.listarProveedor();
  }
 
  listarProveedor(){
    this.provSvs.getProveedor().subscribe(prov =>{
      this.proveedor=prov;
    });
  };

  eliminarProv(id: any) {
    console.log("entraste eliminar "+ id)
    this.provSvs.eliminarProveedor(id)
    
    this.listarProveedor();
    
  };



  /*eliminarProv(id: any) {
    this.articulosSubscription = this.provSvs.eliminarProveedor(id).subscribe({
      next: () => {
        // Aquí puedes realizar alguna acción adicional después de eliminar el artículo si es necesario.
        // Por ejemplo, puedes volver a cargar la lista de artículos actualizada.
        this.listarProveedor();
      },
      error: (error) => {
        console.error('Error al eliminar el artículo:', error);
      }
    });
  }
  ngOnDestroy() {
    // Importante: Desuscribirse para evitar memory leaks.
    if (this.articulosSubscription) {
      this.articulosSubscription.unsubscribe();
    }
  }*/
 
  

}