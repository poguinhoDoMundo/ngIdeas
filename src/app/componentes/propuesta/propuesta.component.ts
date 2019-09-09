import { Component, OnInit } from '@angular/core';

import { FactoresService } from '../../service/factores.service';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html'
})
export class PropuestaComponent implements OnInit {

  factores:any[];

  constructor( _factorService:FactoresService ) {
      this.factores = _factorService.getFactores();
  }

  ngOnInit() {
  }

}
