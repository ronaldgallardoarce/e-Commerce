import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TallaService } from 'src/app/Services/talla.service';
=======
import { TallaService } from 'src/app/services/talla.service';
>>>>>>> 84397b9ac0c6625f75ba9226ac886c5c17671cdf
import { Talla } from 'src/app/Interfaces/talla.interface';

@Component({
  selector: 'app-talla-listar',
  templateUrl: './talla-listar.component.html',
  styleUrls: ['./talla-listar.component.css']
})
export class TallaListarComponent implements OnInit {

  constructor(private tallaSvs:TallaService) { }
  tallas: Talla[]=[]; 
  ngOnInit(): void {
    this.tallaSvs.getTallas().subscribe(talla=>{
      this.tallas=talla;
    })
    console.log(this.tallas);
  }

}
