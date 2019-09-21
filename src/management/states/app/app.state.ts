import { PostState } from '../post';
import { UserState } from '../user';

export interface AppState {
  userState: UserState;
  postState: PostState;
}
