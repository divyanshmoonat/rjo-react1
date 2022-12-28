import axios from "../utils/axios";
import jwtDecode from "jwt-decode";

import {
  SET_USER_DATA,
  USER_LOGIN_SUCCESSFUL,
  USER_SUCCESSFUL_LOGOUT,
} from "../actionTypes/actionTypes";
import { CONSTANTS } from "../utils/contsnts";

export const loginUser = (input) => {
  // Dispatch an action to show loader
  return async function (dispatch) {
    try {
      const res = await axios.post(
        `${CONSTANTS.API_BASE_URL}auth/login`,
        input
      );
      console.log(res.data);
      const tokenData = jwtDecode(res.data.token);
      localStorage.setItem("token", res.data.token);
      // Dispatch an action to hide loader
      dispatch({
        type: SET_USER_DATA,
        payload: tokenData,
      });
      dispatch({
        type: USER_LOGIN_SUCCESSFUL,
        payload: true,
      });
    } catch (err) {
      console.log(err);
    }

    // axios
    //   .post(`${CONSTANTS.API_BASE_URL}auth/login`, input)
    //   .then((res) => {
    //     console.log(res.data);
    //     const tokenData = jwtDecode(res.data.token);
    //     localStorage.setItem("token", res.data.token);
    //     // Dispatch an action to hide loader
    //     dispatch({
    //       type: SET_USER_DATA,
    //       payload: tokenData,
    //     });
    //     dispatch({
    //       type: USER_LOGIN_SUCCESSFUL,
    //       payload: true,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};

export const logoutUser = () => {
  return {
    type: USER_SUCCESSFUL_LOGOUT,
    payload: true,
  };
};
