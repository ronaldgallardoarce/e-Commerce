import { Component, OnInit } from '@angular/core';
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
  count:number=0;
  isLoggedInUser: boolean = false;
  constructor(private dataservice: DataService) { }
  
  ngOnInit(): void {
    this.dataservice.state$.subscribe((state)=>{
      this.isLoggedInUser = this.isLoggedIn();
      this.count=state.Carrito.length;
    })
  }
  isLoggedIn=()=>{
    const data: LocalUser =JSON.parse(localStorage.getItem(this.Key) || '{}');
    if(data.Id){
      console.log("a")
      // const car=  this.dataservice.GetClientId(data.Id);
      this.user=data
      return true
    }else{
      return false
    }
  }
  cerrar=()=>{
    console.log('click')
    localStorage.removeItem(this.Key)
  }
}
