import { LocalUser } from "./LocalUser";
import { LoginCliente } from "./LoginCliente";
import { Cliente } from "./UsuarioCliente";
import { Articulo } from "./articulo";
import { ImagenArticulo } from "./imagen-articulo";

export interface EstadoInicial {
    Logged:Cliente,
    Articulos:Articulo[]
    DetalleArticulo:any
    ImagenesArticulos:ImagenArticulo[]
    LocalUser:LocalUser
}
