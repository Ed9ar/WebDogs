import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './main-components/encabezado/encabezado.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ContentComponent } from './main-components/content/content.component';

import { ConoceModule } from './module/conoce/conoce.module';
import { DenunciasModule} from './module/denuncias/denuncias.module';

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
    DenunciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
