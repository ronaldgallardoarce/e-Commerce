import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleArticuloComponent } from './Components/detalle-articulo/detalle-articulo.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'detallearticulo/:id',component:DetalleArticuloComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
