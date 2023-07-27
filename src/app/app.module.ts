import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Components/Articulo/listar/listar.component';
import { TallaListarComponent } from './Components/Talla/talla-listar/talla-listar.component';
import { GrupoListarComponent } from './Components/Grupo/grupo-listar/grupo-listar.component';
import { ProveedorListarComponent } from './Components/Proveedor/proveedor-listar/proveedor-listar.component';
import { ImagenListarComponent } from './Components/Imagen/imagen-listar/imagen-listar.component';
import { TallaInsertarComponent } from './Components/Talla/talla-insertar/talla-insertar.component';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { DetalleArticuloComponent } from './Components/detalle-articulo/detalle-articulo.component';
import { FormPagoComponent } from './Components/form-pago/form-pago.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    TallaListarComponent,
    GrupoListarComponent,
    ProveedorListarComponent,
    ImagenListarComponent,
    TallaInsertarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DetalleArticuloComponent,
    FormPagoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
