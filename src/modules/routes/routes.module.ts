import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddUserComponent, ListUsersComponent } from '../../components';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent
  },
  {
    path: 'app',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: ListUsersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
