import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContentComponent,
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
    PerfilPerroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
