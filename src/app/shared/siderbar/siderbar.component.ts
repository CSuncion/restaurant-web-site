import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent implements OnInit {

  menuItems: any[];

  constructor(private sidebarServices: SidebarService) { 
    this.menuItems = this.sidebarServices.menu;
  }

  ngOnInit(): void {
  }

}
