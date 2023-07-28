import { Component, OnInit } from '@angular/core';
import { LocalUser } from 'src/app/Interfaces/LocalUser';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  Key: string = "SaveAsLocalStorage";
  dataCart:any=[]
  price:any=0
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    const data: LocalUser =JSON.parse(localStorage.getItem(this.Key) || '{}');
    this.dataservice.GetCartClientId(data.Id);
    this.dataservice.state$.subscribe((state)=>{
      const da=JSON.parse(localStorage.getItem('Carrito') || '[]')
      this.dataCart=da;
      for(const item of da){
        this.price+=Number(item.PrecioUnitario);
      }
      console.log(this.dataCart)
    })
  }
}
//a   a1      