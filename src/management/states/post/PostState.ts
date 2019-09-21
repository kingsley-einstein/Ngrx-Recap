import { Post } from '../../../models';

export interface PostState {
  data: Post | null;
  posts: Post[] | null;
}

export const initialPostState: PostState = {
  data: null,
  posts: null
}
