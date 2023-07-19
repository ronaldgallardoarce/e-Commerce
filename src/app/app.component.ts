import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient){}
  title = 'NuevoEstilo';
  articulos=[];
  getPeliculas(){
    this.http.get('').subscribe(res=>{
      console.log(res)
    })
  }
}
