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
  constructor(private dataservice: DataService) { }
  
  ngOnInit(): void {
    this.dataservice.state$.subscribe((state)=>{
    })
  }
  isLoggedIn=()=>{
    const data: LocalUser =JSON.parse(localStorage.getItem(this.Key) || '{}');
    if(data.Id){
      this.user=data
      return 1
    }else{
      return 0
    }
  }
  cerrar=()=>{
    console.log('click')
    localStorage.removeItem(this.Key)
  }
}
