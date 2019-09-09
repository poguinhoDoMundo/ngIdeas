import { Component, OnInit } from '@angular/core';
import { FactoresService } from '../../service/factores.service';
import {ProyectoService } from '../../service/proyecto.service';


@Component({
  selector: 'app-factores',
  templateUrl: './factores.component.html'
})

export class FactoresComponent implements OnInit {

  factores:any[];
  constructor( _factorServicio:FactoresService, public _proyectoService:ProyectoService ) {
      this.factores = _factorServicio.getFactores();
  }

  ngOnInit() {
  }


}
