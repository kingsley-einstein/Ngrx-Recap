import { Action } from '@ngrx/store';
import { Post } from '../../../models';

export enum PostActionTypes {
  LoadPost = '[Post] Load A Post',
  LoadPosts = '[Post] Load All Posts'
}

export class LoadPostAction implements Action {
  readonly type = PostActionTypes.LoadPost
  constructor(public payload: {
    data: Post
  }) {
  }
}

export class LoadPostsAction implements Action {
  readonly type = PostActionTypes.LoadPosts
  constructor(public payload: {
    data: Post[]
  }) {
  }
}

export type PostActionUnion = LoadPostAction | LoadPostsAction;
