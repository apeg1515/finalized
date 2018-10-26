import axios from "axios";
import {
  SHOW_ALL_USERS,
  EDIT_USER,
  USER_EDIT_SUBMITTED,
  EDIT_USER_FAILED,
  USER_EDIT_SUBMITTED_FAILED,
  SHOW_ALL_USERS_FAILED
} from "./actionTypes";

import data from "../assets/mock-users";
function showAllUsersAction() {
  return async dispatch => {
    try {
      //const method = await axios.get('../assets/mock-users.js');
      if (data) {
        dispatch({ type: SHOW_ALL_USERS, payload: data });
      }
    } catch (err) {
      dispatch({ type: SHOW_ALL_USERS_FAILED, payload: err });
    }
  };
}

function editUserAction(id) {
  return async dispatch => {
    try {
      //const method = await axios.get('../assets/mock-users.js');
      dispatch({ type: EDIT_USER, payload: id });
    } catch (err) {
      dispatch({ type: EDIT_USER_FAILED, payload: err });
    }
  };
}

function submitEditUserAction(value) {
  return async dispatch => {
    try {
      console.log(value);
      //const method = await axios.get('../assets/mock-users.js');
      dispatch({ type: USER_EDIT_SUBMITTED, payload: value });
    } catch (err) {
      dispatch({ type: USER_EDIT_SUBMITTED_FAILED, payload: err });
    }
  };
}

export { showAllUsersAction, editUserAction, submitEditUserAction };
