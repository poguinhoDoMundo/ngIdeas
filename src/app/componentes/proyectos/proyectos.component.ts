import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ProyectoService} from '../../service/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {

  proyectos:any[];
  factor:number;
  star:boolean=false;

  constructor(  _proyectoService:ProyectoService,
                _activatedRoute:ActivatedRoute  ) {

      _activatedRoute.params.subscribe( params=>{this.factor=params["id_factor"];} );
      this.proyectos = _proyectoService.getproyectos(this.factor);
   }

  ngOnInit() {
  }

}
