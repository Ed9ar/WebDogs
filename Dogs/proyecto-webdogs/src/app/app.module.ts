import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './main-components/encabezado/encabezado.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ContentComponent } from './main-components/content/content.component';

import { ConoceModule } from './module/conoce/conoce.module';
import { DenunciasModule} from './module/denuncias/denuncias.module';
import { ContactoModule } from './module/contacto/contacto.module';
import { CuentaModule } from './module/cuenta/cuenta.module';
import { RegistroModule } from './module/registro/registro.module';
import { LoginModule } from './module/login/login.module';
import { RegistrarPerroModule } from './module/registrar-perro/registrar-perro.module';
import { FamiliasModule } from './module/familias/familias.module';
import { MainModule } from './module/main/main.module';
import { PerfilPerroModule } from './module/perfil-perro1/perfil-perro.module';
import { RegistrarPerroService } from './module/registrar-perro/services/registrar-perro.service';
import { ContactoService } from './module/contacto/services/contacto.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EncabezadoLogueadoComponent } from './main-components/encabezado-logueado/encabezado-logueado.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContentComponent,
    EncabezadoLogueadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConoceModule,
    DenunciasModule,
    ContactoModule,
    CuentaModule,
    RegistroModule,
    LoginModule,
    RegistrarPerroModule,
    FamiliasModule,
    MainModule,
    PerfilPerroModule,
    NgbModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule
  ],
  providers: [RegistrarPerroService, ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
