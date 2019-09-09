import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FactoresService {

  factores:any[];


  constructor( private http:HttpClient ) {
      console.log("servicio listo para usarse");
   }


  consumeFactores(){
    return this.http.get('http://localhost:53275/home/getfactores')
        .map((result : any)=>{ this.factores = result;
                               console.log( "x lo menos entre" );    
                               return result;
                             });

  }

  getFactores(){
    console.log( this.factores );
    return this.factores;
  }

}


export interface factores{

    nombre:string;
    id:number;
    descripcion:string;
    img:string;

}
