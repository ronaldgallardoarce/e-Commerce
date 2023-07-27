import { Articulo } from "./articulo";
import { ImagenArticulo } from "./imagen-articulo";
import { Talla } from "./talla.interface";

export interface EstadoInicial {
    Articulos:Articulo[]
    DetalleArticulo:any
    ImagenesArticulos:ImagenArticulo[]
    Talla:Talla[]
}
