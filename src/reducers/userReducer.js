import {
  USER_LOGIN_SUCCESSFUL,
  USER_SUCCESSFUL_LOGOUT,
  SET_USER_DATA,
} from "../actionTypes/actionTypes";

const initState = {
  isLoggedIn: false,
  userData: {},
  loading: false,
};

export default (state = initState, action) => {
  // console.log("USER REDUCER", action);
  switch (action.type) {
    case USER_LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_SUCCESSFUL_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
