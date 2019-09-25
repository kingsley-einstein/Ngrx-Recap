import { PostState, initialPostState } from '../../states';
import { PostActionTypes, PostActionUnion } from '../../actions';

export default (state: PostState = initialPostState, action: PostActionUnion) : PostState => {
  switch (action.type) {
    case PostActionTypes.LoadPost:
      return {
        ...state,
        data: action.payload.data
      };
    case PostActionTypes.LoadPosts:
      return {
        ...state,
        posts: action.payload.data
      };
    default:
      return state;
  }
};
