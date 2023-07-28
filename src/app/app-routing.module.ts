import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleArticuloComponent } from './Components/detalle-articulo/detalle-articulo.component';
import { FormPagoComponent } from './Components/form-pago/form-pago.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AboutComponent } from './Components/about/about.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'detallearticulo/:id',component:DetalleArticuloComponent},
  {path:'formPago',component:FormPagoComponent},
  {path:'login',component:LoginComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'about',component:AboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
