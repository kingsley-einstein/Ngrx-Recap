import { UserState, initialUserState } from '../../states';
import { UserActionTypes, UserActionUnion } from '../../actions';



export default (state: UserState = initialUserState, action: UserActionUnion) : UserState => {
  switch (action.type) {
    case UserActionTypes.LoadUser:
      return {
        ...state,
        data: action.payload.data
      };
    case UserActionTypes.LoadUsers:
      return {
        ...state,
        users: action.payload.data
      };
    default:
      return state;
  }
};
