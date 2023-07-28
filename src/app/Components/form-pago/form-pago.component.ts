import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Articulo } from 'src/app/Interfaces/articulo';
import { ApiUrl } from 'src/app/Interfaces/config';
import { StripeConfig } from 'src/app/Interfaces/stripe-config';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-form-pago',
  templateUrl: './form-pago.component.html',
  styleUrls: ['./form-pago.component.css']
})
export class FormPagoComponent implements OnInit {

  Articulo:Articulo={
    Id: undefined,
    Nombre: '',
    Descripcion: '',
    Material: '',
    PrecioUnitario: undefined,
    CodigoBarras: undefined,
    CodigoProveedor: undefined,
    IdTalla: undefined,
    IdGrupo: undefined,
    IdProveedor: undefined,
    Color: '',
    Imagenes: []
  }

  constructor(
    private dataService:DataService,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.dataService.state$.subscribe(state=>{
      this.Articulo=state.DetalleArticulo
    })
  }

  async onCheckout(){
    const Stripe= await loadStripe(StripeConfig.publishableKey)
    try {
      const session=await this.http.post<any>(ApiUrl+'checkout.php',{
        articulo:this.Articulo
      }).toPromise();
      Stripe?.redirectToCheckout({
        sessionId:session.sessionId,
      })
    } catch (error) {
      console.error('Error al obtener la sesión de pago:', error);
    }
  }
}
