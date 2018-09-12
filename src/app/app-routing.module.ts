import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TableComponent} from './components/table/table.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'table',
    component: TableComponent,
    data: { title: 'Table Title' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
