import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { Imagen } from 'src/app/Interfaces/imagen.interfece';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Articulo } from 'src/app/Interfaces/articulo';

@Component({
  selector: 'app-imagen-listar',
  templateUrl: './imagen-listar.component.html',
  styleUrls: ['./imagen-listar.component.css']
})
export class ImagenListarComponent implements OnInit {

  constructor(private imagenSvs: ImagenService, private articuloSvs: ArticuloService) { }
  objeto:any;
  elementos:any;
  imagen: Imagen[]=[]; 
  articulos: Articulo[]=[];
  /*art:articulo={
    Id:'',
    Nombre:'',  
  }*/

  ngOnInit(): void {
    this.imagenSvs.getImagen().subscribe(img=>{
      this.imagen=img;
    })
    this.articuloSvs.getArticulos().subscribe(art=>{
      this.articulos=art;
      /*const{Id, Nombre}=this.objeto;

      this.art.Id=Id;
      this.art.Nombre=Nombre;
      console.log(this.art);*/
    })
    
  }
  obtenerNombrePorId(id: number): string {
    const imagenEncontrada = this.imagen.find((imagenes) => imagenes.IdArticulo === id);
    if (imagenEncontrada) {
      const articuloEncontrado = this.articulos.find((articulo) => articulo.Id === imagenEncontrada.IdArticulo);
      return articuloEncontrado ? articuloEncontrado.Nombre : 'Artículo no encontrado';
    } else {
      return 'Imagen no encontrada';
    }
  }
}
/*interface articulo{
  Id?:any;
  Nombre?:string;
}*/