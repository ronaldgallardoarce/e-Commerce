import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from '../Interfaces/articulo';
import { ApiUrl } from '../Interfaces/config';
import { EstadoInicial } from '../Interfaces/estado-inicial';
import { ImagenArticulo } from '../Interfaces/imagen-articulo';
import { Talla } from '../Interfaces/talla.interface';
import { LoginCliente } from '../Interfaces/LoginCliente';
import { Cliente } from '../Interfaces/UsuarioCliente';
import { LocalUser } from '../Interfaces/LocalUser';
import { Carrito } from '../Interfaces/carrito';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient,private router:Router) {
    this.GetAllArticulos();
  }
  private InitialState: EstadoInicial = {
    Logged: {
      Id: '',
      Documento: '',
      TipoDocumento: '',
      Nombre: '',
      Apellidos: '',
      Direccion: '',
      Celular: '',
      Correo: '',
      Usuario: '',
      Contraseña: '',
      Foto: '',
      Nacionalidad: '',
      Ciudad: '',
      Genero: ''
    },
    LocalUser: {
      Id: '',
      Nombre: '',
      Usuario: '',
      Foto: ''
    },
    Carrito:[], //actualizamos este estado
    Articulos: [],
    DetalleArticulo: {},
    ImagenesArticulos: [],
    Talla: []
  };
  private StateSubject = new BehaviorSubject<EstadoInicial>(this.InitialState);
  state$ = this.StateSubject.asObservable();
  GetClient(cliente: LoginCliente) { //Con esto busco el cliente y me traigo  * los datos
    return new Promise((resolve,reject)=>{
      try {
        const currentState = this.StateSubject.value;
        
        this.http
          .post(ApiUrl + 'logincliente.php?function=getCliente', cliente)
          .subscribe(async(res) => {
            if (res) {
              await this.StateSubject.next({
                ...currentState,
                Logged: <Cliente>res,
              });
              this.GetCartClientId(this.StateSubject.value.Logged.Id);
              alert("Login success")
              resolve("Ok");
            }else{
              reject("Error")
              return
            }
          });
      } catch (error) {}
    })
  }
  ChargeLocalUser(user:any){
    const currentState = this.StateSubject.value;
    this.StateSubject.next({
      ...currentState,
      LocalUser:<LocalUser>user,
    });
  }
  GetCartClientId(id:any){
    try {
      localStorage.removeItem('Carrito');
      const currentState=this.StateSubject.value;
      this.http.get(ApiUrl+`logincliente.php?function=getCarrito&id=${id}`)
      .subscribe(res=>{
        const data=<Articulo[]>res
        let newArray:any=[];
        data.map((r)=>{
          newArray.push(this.FilterItemsCart(r));
        })
        console.log(newArray)
        localStorage.setItem('Carrito',JSON.stringify(newArray));
        return res;
      })
    } catch (error) {
      console.log(error)
    }
  }
  FilterItemsCart=(r:any)=>{
    try {
      console.log(this.StateSubject.value.Articulos)
      const currentState =this.StateSubject.value;
      const data=this.StateSubject.value.Articulos.find((a)=>a.Nombre===r.Nombre);
      console.log(data)
      return data;
    } catch (error) {
      return
    }
  }
  AñadirCarrito(id_cliente: number, id_articulo: number, stock: number) {
    try {
      const obj = {
        id_cliente: id_cliente,
        id_articulo: id_articulo,
        stock: stock
      };
  
      this.http
        .post("http://localhost:3000/BackEnd/logincliente.php?function=postCarrito", JSON.stringify(obj))
        .subscribe((res) => {
          if (res) {
            this.router.navigate(["/home"])
          }
           
        });
        
    } catch (error) {
       console.log(error)
    }
  }
  GetAllArticulos() {
    try {
      const currentState = this.StateSubject.value;
      this.http
        .get(ApiUrl + 'articulo.php?function=getAllArticulos')
        .subscribe((res) => {
          this.StateSubject.next({
            ...currentState,
            Articulos: <Articulo[]>res,
          });
          this.GetImagenArticulos();
        });
    } catch (error) {
      console.log(error);
    }
  }

  FiltrarArticulos(id:any) {
    try {
      const currentState = this.StateSubject.value;
      this.http
        .get(ApiUrl + `articulo.php?function=getfiltrararticulo&id=${id}`)
        .subscribe((res) => {
          this.StateSubject.next({
            ...currentState,
            Articulos: <Articulo[]>res,
          });
          this.GetImagenArticulos();
        });
    } catch (error) {
      console.log(error);
    }
  }

  GetArticulo(id: any) {
    try {
      const currentState = this.StateSubject.value;
      this.http
        .get(ApiUrl + `articulo.php?function=getArticulo&id=${id}`)
        .subscribe((res) => {
          this.StateSubject.next({
            ...currentState,
            DetalleArticulo: <Articulo>res,
          });
          const dato = <Articulo>res;
          this.StateSubject.value.DetalleArticulo.Imagenes =
            this.StateSubject.value.ImagenesArticulos.filter(
              (img: ImagenArticulo) => img.IdArticulo === dato.Id
            );
        });
    } catch (error) {
      console.log(error);
    }
  }

  GetImagenArticulos() {
    try {
      const currentState = this.StateSubject.value;
      this.http
        .get(ApiUrl + 'articulo.php?function=getImagenArticulo')
        .subscribe((res) => {
          this.StateSubject.next({
            ...currentState,
            ImagenesArticulos: <ImagenArticulo[]>res,
          });
          this.StateSubject.value.Articulos.forEach((item: Articulo) => {
            const x = this.StateSubject.value.ImagenesArticulos.filter(
              (img: ImagenArticulo) => img.IdArticulo === item.Id
            );
            item.Imagenes = this.StateSubject.value.ImagenesArticulos.filter(
              (img: ImagenArticulo) => img.IdArticulo === item.Id
            );
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
  getAllTallas(){
    try {
      const currentState=this.StateSubject.value
      this.http.get(ApiUrl+'talla.php?function=getAll').subscribe(res=>{
        this.StateSubject.next({
          ...currentState,
          Talla:<Talla[]>res
        })
      })
    } catch (error) {
      console.log(error)
    }
  }
}
