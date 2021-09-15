import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from './main-content.component';
import {UserEditComponent} from './user-edit.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainContentComponent,
  },
  {
    path: 'user-detail',
    component: MainContentComponent,
  },
  {
    path: 'user-detail-drawer',
    component: UserEditComponent,
    outlet: 'drawer'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
