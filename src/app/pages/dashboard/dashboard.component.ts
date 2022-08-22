import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  isAperturaCaja: boolean = false;
  fechaApertura: string = '';
  anio: string = '';
  mes: string = '';
  dia: string = '';
  constructor() { }

  ngOnInit() {
    this.isAperturaCaja = false;
    let date: Date = new Date();
    this.anio = date.getFullYear().toString();
    this.mes = ('0' + (date.getMonth() + 1)).slice(-2).toString();
    this.dia = date.getDate().toString();
    this.fechaApertura = `${this.dia}/${this.mes}/${this.anio}`;
    console.log(this.isAperturaCaja);
    console.log(this.fechaApertura);
  }

}
