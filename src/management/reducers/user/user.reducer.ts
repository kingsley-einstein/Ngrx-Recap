import { UserState, initialUserState } from '../../states';
import { UserActionTypes, UserActionUnion } from '../../actions';



export default (state: UserState = initialUserState, action: UserActionUnion) : UserState => {
  switch (action.type) {
    case UserActionTypes.LoadUser:
      return {
        data: action.payload.data,
        users: null
      };
    case UserActionTypes.LoadUsers:
      return {
        users: action.payload.data,
        data: null
      };
    default:
      return state;
  }
};
