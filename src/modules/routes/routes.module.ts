import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AddUserComponent, ListUsersComponent, AddPostComponent, ListPostsComponent, ViewUserComponent, ViewPostComponent } from '../../components';

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
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'list-posts',
    component: ListPostsComponent
  },
  {
    path: 'user/:email',
    component: ViewUserComponent
  },
  {
    path: 'post/:id',
    component: ViewPostComponent
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
