import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProyectoService } from '../../service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent implements OnInit {

  proyecto:any;
  factor:number;
  constructor( _proyectoService:ProyectoService,
              _activatedRoute:ActivatedRoute  ) {
        _activatedRoute.params.subscribe(  params=>{
            this.proyecto = _proyectoService.getProyecto( params["id"]  );
            this.factor = params["id_factor"];
        } )

   }

  ngOnInit() {
  }

}
