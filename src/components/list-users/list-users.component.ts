import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectUsers } from '../../management/selectors';
import { AppState } from '../../management/states';
import { LoadUsersActionPing } from '../../management/actions';
import { User } from '../../models';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  constructor(private _store: Store<AppState>, private router: Router) {}

  users$ = this._store.pipe(select(selectUsers));
  columns$ = ['firstName', 'lastName', 'email', 'dob', 'action'];

  ngOnInit() {
    console.log('[ListUsersComponent] initialised')
    this.dispatch();
  }

  dispatch() {
    this._store.dispatch(new LoadUsersActionPing());
  }

  display(user: User) {
    console.log(user);
    this.router.navigate(['user', user.email]);
  }
} 
