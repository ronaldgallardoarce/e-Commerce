import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { Grupo } from 'src/app/Interfaces/grupo.interface';

@Component({
  selector: 'app-grupo-listar',
  templateUrl: './grupo-listar.component.html',
  styleUrls: ['./grupo-listar.component.css']
})
export class GrupoListarComponent implements OnInit {

  constructor(private grupoSvs: GrupoService) { }

  grupos: Grupo[]=[]; 
  ngOnInit(): void {
    this.grupoSvs.getGrupo().subscribe(grupo=>{
      this.grupos=grupo;
    })
    console.log(this.grupos);
  }

}
