import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo.interface';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

 
  constructor(private articulosSvs:ArticuloService) { }
  articulos: Articulo[]=[]; 
  ngOnInit(): void {
    this.articulosSvs.getArticulos().subscribe(art=>{
      this.articulos=art;
    })
  }
  
 
}
