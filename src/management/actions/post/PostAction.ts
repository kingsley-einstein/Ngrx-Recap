import { Action } from '@ngrx/store';
import { Post } from '../../../models';

export enum PostActionTypes {
  LoadPostPing = '[Post] Ping To Load A Post',
  LoadPostsPing = '[Post] Ping To Load All Posts',
  LoadPost = '[Post] Load A Post',
  LoadPosts = '[Post] Load All Posts'
}

export class LoadPostActionPing implements Action {
  readonly type = PostActionTypes.LoadPostPing;
  constructor(public payload: number) {}
}

export class LoadPostsActionPing implements Action {
  readonly type = PostActionTypes.LoadPostsPing;
}

export class LoadPostAction implements Action {
  readonly type = PostActionTypes.LoadPost;
  constructor(public payload: {
    data: Post
  }) {
  }
}

export class LoadPostsAction implements Action {
  readonly type = PostActionTypes.LoadPosts;
  constructor(public payload: {
    data: Post[]
  }) {
  }
}

export type PostActionUnion = LoadPostAction | LoadPostsAction | LoadPostActionPing | LoadPostsActionPing;
