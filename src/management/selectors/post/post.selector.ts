import { AppState } from '../../states';

export const selectPost = (state: AppState) => state.postState.data;
export const selectPosts = (state: AppState) => state.postState.posts;
