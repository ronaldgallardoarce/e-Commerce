import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleArticuloComponent } from './Components/detalle-articulo/detalle-articulo.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'detallearticulo/:id',component:DetalleArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
