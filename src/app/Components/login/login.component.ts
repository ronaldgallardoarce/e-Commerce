import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalUser } from 'src/app/Interfaces/LocalUser';
import { LoginCliente } from 'src/app/Interfaces/LoginCliente';
import { Cliente } from 'src/app/Interfaces/UsuarioCliente';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Cliente:LoginCliente={
    Usuario: '',
    Pass: ''
  }
  ClienteLogged:Cliente={
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
  Genero: ''};
  Key: string="SaveAsLocalStorage"
  constructor(private dataservice:DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataservice.state$.subscribe(state=>{
      this.ClienteLogged=state.Logged
    })
  }
  submitForm=async()=>{
    await this.dataservice.GetClient(this.Cliente)
    const data:LocalUser={
      Id:this.ClienteLogged.Id,
      Nombre:this.ClienteLogged.Nombre,
      Usuario:this.ClienteLogged.Usuario,
      Foto:this.ClienteLogged.Foto
    }
    localStorage.setItem(this.Key,JSON.stringify(data));
    this.router.navigate(['/home']);
  }
  
}
