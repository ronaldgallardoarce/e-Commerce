import { Component, OnInit } from '@angular/core';
import { TallaService } from 'src/app/services/talla.service';
import { Talla } from 'src/app/interfaces/talla.interface';

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
