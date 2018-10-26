import { combineReducers } from "redux";
import {
  SHOW_ALL_USERS,
  EDIT_USER,
  USER_EDIT_SUBMITTED,
  SHOW_ALL_USERS_FAILED,
  EDIT_USER_FAILED,
  USER_EDIT_SUBMITTED_FAILED
} from "../actions/actionTypes";

const USERS = (state = {}, action) => {
  switch (action.type) {
    case SHOW_ALL_USERS:
      return { ...state, users: action.payload };
    case SHOW_ALL_USERS_FAILED:
      // should be using a logger but for this console.log will do
      console.log(action.payload);
      break;
    case EDIT_USER:
      return {
        ...state,
        user: state.users.filter(user => user.id === action.payload)[0]
      };
    case EDIT_USER_FAILED:
      console.log(action.payload);
      break;
    case USER_EDIT_SUBMITTED:
      return {
        ...state,
        users: state.users.map(
          user => (user.id === action.payload.id ? action.payload : user)
        )
      };
    case USER_EDIT_SUBMITTED_FAILED:
      console.log(state.users);
      break;
    default:
      return state;
  }
};

const userReducer = combineReducers({
  USERS
});

export default userReducer;
