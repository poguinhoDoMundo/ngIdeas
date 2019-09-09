import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  texto:string;

  constructor( private _router:Router) { }
  ngOnInit() {
  }

  searchProyectos(){
      this._router.navigate(["/search",this.texto]);
      this.texto = "";
  }

}
