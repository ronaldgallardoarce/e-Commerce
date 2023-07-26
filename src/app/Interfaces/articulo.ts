import { ImagenArticulo } from "./imagen-articulo"

export interface Articulo {
    Id:any
    Nombre:string
    Descripcion:string
    Material:string
    PrecioUnitario:any
    CodigoBarras: any
    CodigoProveedor:any
    IdTalla:any
    IdGrupo:any
    IdProveedor:any
    Color:string
    Imagenes:ImagenArticulo[]
}
