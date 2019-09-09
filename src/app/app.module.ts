import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

//para obtener el servicio
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//rutas
import { APP_ROUTING } from './app.routes';

//componentes
import { FactoresComponent } from './componentes/factores/factores.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';

//servicion
import { FactoresService } from './service/factores.service';
import { ProyectoService } from './service/proyecto.service';
import { HeadComponent } from './componentes/shared/head/head.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { AboutComponent } from './componentes/about/about.component';
import { PropuestaComponent } from './componentes/propuesta/propuesta.component';
import { SearchComponent } from './componentes/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    FactoresComponent,
    ProyectosComponent,
    ProyectoComponent,
    HeadComponent,
    NavbarComponent,
    AboutComponent,
    PropuestaComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ FactoresService, ProyectoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
