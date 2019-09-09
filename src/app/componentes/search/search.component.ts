import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProyectoService } from '../../service/proyecto.service';

@Component({
  selector: 'app-search',
  templateUrl: '../proyectos/proyectos.component.html'
})
export class SearchComponent implements OnInit {
  proyectos:any[];
  texto:string;
  constructor( _proyectoService:ProyectoService,
              _activatedRoute:ActivatedRoute  ) {

          _activatedRoute.params.subscribe( params=>{ this.texto = params["texto"]   } )

          this.proyectos = _proyectoService.searchProyecto(this.texto);

   }

  ngOnInit() {
  }

}
