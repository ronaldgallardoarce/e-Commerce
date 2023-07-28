import { LocalUser } from "./LocalUser";
import { LoginCliente } from "./LoginCliente";
import { Cliente } from "./UsuarioCliente";
import { Articulo } from "./articulo";
import { Carrito } from "./carrito";
import { ImagenArticulo } from "./imagen-articulo";
import { Talla } from "./talla.interface";

export interface EstadoInicial {
    Logged:Cliente,
    Articulos:Articulo[]
    DetalleArticulo:any
    ImagenesArticulos:ImagenArticulo[]
    Talla:Talla[]
    LocalUser:LocalUser,
    Carrito:Carrito[]
}
