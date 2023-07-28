import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Interfaces/articulo';
import { ArticuloService } from 'src/app/Services/articulo.service';

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
