import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      ico: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'Mesas',
          url: 'mesas'
        },
        {
          title: 'Gestión de Comandas',
          url:'gestion-comanda'
        }

      ]
    }
  ];


  constructor() { }


}
