import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalUser } from 'src/app/Interfaces/LocalUser';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Key: string = "SaveAsLocalStorage";

  user:LocalUser={
    Id:'',
    Nombre:'',
    Usuario:'',
    Foto:''
  }
  isLoggedInUser:boolean=false;
  count:number=0;
  constructor(private dataservice: DataService, private router:Router) { }
  
  ngOnInit(): void {
    this.dataservice.state$.subscribe((state)=>{
      this.isLoggedInUser = this.isLoggedIn();
      this.count=state.Carrito.length;
    })
  }
  isLoggedIn=()=>{
    const data: LocalUser =JSON.parse(localStorage.getItem(this.Key) || '{}');
    // this.dataservice.GetClientId(data.Id);
    if(data.Id){
      this.user=data
      return true
    }else{
      return false
    }
  }
  cerrar=()=>{
    console.log('click')
    localStorage.removeItem(this.Key)
    this.isLoggedInUser = false;
    this.router.navigate(["/home"])
  }
  hombre(){
    this.dataservice.FiltrarArticulos(1)
    this.router.navigate(["/filtrar"])
  }
  femenino(){
    this.dataservice.FiltrarArticulos(2)
    this.router.navigate(["/filtrar"])
  }
  todo(){
    this.dataservice.GetAllArticulos()
    this.router.navigate(["/home"])
  }
}
