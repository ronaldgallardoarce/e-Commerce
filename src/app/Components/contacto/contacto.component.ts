import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { concatAll } from 'rxjs';
import { ContactoService } from 'src/app/Services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  map : any;
  nombre: string = '';
  correo: string = '';
  descripcion: string = '';
  
  constructor(private contactoSvs:ContactoService) { }

  ngOnInit(): void {
    this.crear_mapa();
  }
 
  private crear_mapa(): void {

    this.map = L.map('map').setView([-21.537353, -64.740499], 16);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(this.map);

    this.map.setMaxZoom(16);
  // Coordenadas del marcador
  const markerLatLng :any= [-21.537353, -64.740499];
  // Añadir el marcador al mapa
   L.marker(markerLatLng).addTo(this.map);
  };

  insertarContacto() {
    const contacto:any = {
      nombre: this.nombre,
      correo: this.correo,
      descripcion: this.descripcion
    };
    this.contactoSvs.insertarContacto(contacto)  
    console.log("OK"+ this.nombre,this.correo, this.descripcion)
  }

}
