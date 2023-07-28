import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleArticuloComponent } from './Components/detalle-articulo/detalle-articulo.component';
import { FiltrararticuloComponent } from './Components/filtrararticulo/filtrararticulo.component';
import { FormPagoComponent } from './Components/form-pago/form-pago.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { CarritoComponent } from './Components/carrito/carrito.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'detallearticulo',component:DetalleArticuloComponent},
  {path:'formPago',component:FormPagoComponent},
  {path:'login',component:LoginComponent},
  {path:'filtrar',component:FiltrararticuloComponent},
  {path:'carrito',component:CarritoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
