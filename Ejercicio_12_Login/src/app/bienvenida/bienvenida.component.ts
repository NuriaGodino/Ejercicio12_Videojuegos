import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  usuario:string = ''
  pass:string = ''

  parametroQuery1: string = ''
  parametroQuery2: string = ''

  constructor(route:ActivatedRoute) {
    this.usuario = route.snapshot.params["usuario"]  
    this.pass = route.snapshot.params["pass"]

    this.parametroQuery1 = route.snapshot.queryParams["parametro1"]
    this.parametroQuery2 = route.snapshot.queryParams["parametro2"]
  }

  ngOnInit() {
  }

}
