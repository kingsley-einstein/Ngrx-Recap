import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../../states';
import postReducer from '../post';
import userReducer from '../user';

const appReducers: ActionReducerMap<AppState> = {
  userState: userReducer,
  postState: postReducer
};

export default appReducers;
