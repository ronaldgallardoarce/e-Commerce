import { Articulo } from "./articulo";
import { ImagenArticulo } from "./imagen-articulo";

export interface EstadoInicial {
    Articulos:Articulo[]
    DetalleArticulo:any
    ImagenesArticulos:ImagenArticulo[]
}
