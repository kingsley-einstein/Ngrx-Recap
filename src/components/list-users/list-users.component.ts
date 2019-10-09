import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUsers } from '../../management/selectors';
import { AppState } from '../../management/states';
import { LoadUsersActionPing } from '../../management/actions';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  constructor(private _store: Store<AppState>) {}

  users$ = this._store.pipe(select(selectUsers));
  columns$ = ['firstName', 'lastName', 'email', 'dob'];

  ngOnInit() {
    console.log('[ListUsersComponent] initialised')
    this.dispatch();
  }

  dispatch() {
    this._store.dispatch(new LoadUsersActionPing());
  }
} 
