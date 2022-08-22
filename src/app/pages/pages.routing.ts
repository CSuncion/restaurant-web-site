import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MesasComponent } from './mesas/mesas.component';
import { GestionComandaComponent } from './gestion-comanda/gestion-comanda.component';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { title: 'ProgressBar' } },
      { path: 'graph1', component: Graph1Component, data: { title: 'Gráfica #1' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Asjustes de cuenta' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' } },
      { path: 'mesas', component: MesasComponent, data: { title: 'Mesas' } },
      { path: 'gestion-comanda', component: GestionComandaComponent, data: { title: 'Gestión de Comandas' } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
