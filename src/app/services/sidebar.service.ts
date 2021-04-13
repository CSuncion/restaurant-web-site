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
          title: 'ProgressBar',
          url: 'progress'
        },
        {
          title: 'Gráficas',
          url: 'graph1'
        },
        {
          title: 'rxjs',
          url: 'rxjs'
        },
        {
          title: 'Promesas',
          url: 'promises'
        }

      ]
    }
  ];


  constructor() { }


}
