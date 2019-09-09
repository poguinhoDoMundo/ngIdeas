import { RouterModule, Routes } from '@angular/router';

//componentes
import { FactoresComponent } from './componentes/factores/factores.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { AboutComponent } from './componentes/about/about.component';
import { PropuestaComponent } from './componentes/propuesta/propuesta.component';
import {SearchComponent } from './componentes/search/search.component';

const APP_ROUTES: Routes = [


  { path: 'factores', component: FactoresComponent },
  { path: 'proyectos/:id_factor', component: ProyectosComponent },
  { path: 'proyecto/:id/:id_factor', component: ProyectoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'propuesta', component: PropuestaComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }

];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, {useHash:true});
