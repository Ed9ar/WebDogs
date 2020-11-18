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
import { CerrarSesionComponent } from './main-components/cerrar-sesion/cerrar-sesion.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './main-components/login-button/login-button.component';
import { RegistroButtonComponent } from './main-components/registro-button/registro-button.component';
import { LogoutButtonComponent } from './main-components/logout-button/logout-button.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContentComponent,
    EncabezadoLogueadoComponent,
    CerrarSesionComponent,
    LoginButtonComponent,
    RegistroButtonComponent,
    LogoutButtonComponent,
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
    AppRoutingModule,
    AuthModule.forRoot({ ...env.auth })
  ],
  providers: [RegistrarPerroService, ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
