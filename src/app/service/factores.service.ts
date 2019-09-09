import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FactoresService {
  factores:factores[] = [
    {
      "nombre":"Bienestar",
      "id":0,
      "descripcion":"Bienestar universitario",
      "img":"/assets/img/estudiantes.jpg"
    },
    {
      "nombre":"Estudiante",
      "id":1,
      "descripcion":"Estudiantes",
      "img":"/assets/img/estudiantes.jpg"
    },
    {
      "nombre":"Profesores",
      "id":2,
      "descripcion":"Profesores",
      "img":"/assets/img/profesores.jpg"
    },
    {
      "nombre":"Finanzas",
      "id":3,
      "descripcion":"financiera",
      "img":"/assets/img/financiero.jpg"
    }

  ];


  constructor( private http:HttpClient ) {
      console.log("servicio listo para usarse");
   }

  /* consumeFactores(){
    return this.http.get('http://localhost:53275/home/getfactores')
        .map((result : any)=>{ this.factores = result;
                               console.log( "x lo menos entre" );
                               return result;
                             });
  }*/

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
