import { Action } from '@ngrx/store';
import { User } from '../../../models';

export enum UserActionTypes {
  LoadUserPing = '[User] Ping To Load User',
  LoadUsersPing = '[User] Ping To Load Users',
  LoadUser = '[User] Load A User',
  LoadUsers = '[User] Load All Users'
}

export class LoadUserActionPing implements Action {
  readonly type = UserActionTypes.LoadUserPing;
  constructor(public payload: string) {}
}

export class LoadUsersActionPing implements Action {
  readonly type = UserActionTypes.LoadUsersPing;
}

export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LoadUser;
  constructor(public payload: {
    data: User
  }) {
  }
}

export class LoadUsersAction implements Action {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public payload: {
    data: User[]
  }) {
  }
}

export type UserActionUnion = LoadUserAction | LoadUsersAction | LoadUserActionPing | LoadUsersActionPing;
