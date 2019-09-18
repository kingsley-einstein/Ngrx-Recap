import { Action } from '@ngrx/store';
import { User } from '../../../models';

export enum UserActionType {
  LoadUser = '[User] Load A User',
  LoadUsers = '[Users] Load All Users'
}

export class LoadUserAction implements Action {
  readonly type = UserActionType.LoadUser;
  constructor(payload: {
    data: User
  }) {
  }
}

export class LoadUsersAction implements Action {
  readonly type = UserActionType.LoadUsers;
  constructor(payload: {
    data: User[]
  }) {
  }
}
