import { PostState, initialPostState } from '../../states';
import { PostActionTypes, PostActionUnion } from '../../actions';

export default (state: PostState = initialPostState, action: PostActionUnion) : PostState => {
  switch (action.type) {
    case PostActionTypes.LoadPost:
      return {
        data: action.payload.data,
        posts: null
      };
    case PostActionTypes.LoadPosts:
      return {
        posts: action.payload.data,
        data: null
      };
    default:
      return state;
  }
};
