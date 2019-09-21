import { User } from '../../../models';

export interface UserState {
  data: User | null;
  users: User[] | null;
}

export const initialUserState : UserState = {
  data: null,
  users: null
}
