import { AppState } from '../../states';

export const selectUsers = (state: AppState) => state.userState.users;
export const selectUser = (state: AppState) => state.userState.data;
