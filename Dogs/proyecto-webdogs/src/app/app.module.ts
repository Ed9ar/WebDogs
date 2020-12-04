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

//import { StorageServiceModule } from 'ngx-webstorage-service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


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
    HttpClientModule,
    AuthModule.forRoot({
        // The domain and clientId were configured in the previous chapter
      domain: 'dev-55arag8d.us.auth0.com',
      clientId: 'kEM3XNoTYqZsHwb2hm9BfKxsSlftbtYf',

      // Request this audience at user authentication time
      audience: 'http://localhost:3000/',

      // Request this scope at user authentication time
      scope: 'read:current_user',

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-qz51ohsc.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://dev-55arag8d.us.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://dev-55arag8d.us.auth0.com/api/v2/',

              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        ]
      }
    })
  ],
  providers: [
    RegistrarPerroService,
    ContactoService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
