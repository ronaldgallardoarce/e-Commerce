import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Components/Articulo/listar/listar.component';
<<<<<<< HEAD
import { TallaListarComponent } from './Components/Talla/talla-listar/talla-listar.component';
import { GrupoListarComponent } from './Components/Grupo/grupo-listar/grupo-listar.component';
import { ProveedorListarComponent } from './Components/Proveedor/proveedor-listar/proveedor-listar.component';
import { ImagenListarComponent } from './Components/Imagen/imagen-listar/imagen-listar.component';
import { TallaInsertarComponent } from './Components/Talla/talla-insertar/talla-insertar.component';

=======
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
>>>>>>> 819b812d31c91911526f667eb2c13c00abd3035f

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
<<<<<<< HEAD
    TallaListarComponent,
    GrupoListarComponent,
    ProveedorListarComponent,
    ImagenListarComponent,
    TallaInsertarComponent

=======
    NavbarComponent,
    FooterComponent,
    HomeComponent
>>>>>>> 819b812d31c91911526f667eb2c13c00abd3035f
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
