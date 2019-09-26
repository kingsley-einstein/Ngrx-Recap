import { Action } from '@ngrx/store';
import { User } from '../../../models';

export enum UserActionTypes {
  LoadUser = '[User] Load A User',
  LoadUsers = '[Users] Load All Users'
}

export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LoadUser;
  constructor(public payload: {
    data: User
  } = { data: null }) {
  }
}

export class LoadUsersAction implements Action {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public payload: {
    data: User[]
  } = { data: [] }) {
  }
}

export type UserActionUnion = LoadUserAction | LoadUsersAction;
