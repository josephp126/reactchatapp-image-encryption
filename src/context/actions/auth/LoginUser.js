/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/ActionTypes";
import callApi from "../../../helpers/callApi";

export default ({ password, userName: username }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    callApi
      .post("auth/login", {
        password,
        username,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : { error: "Something went wrong, try agin" },
        });
      });
  };
