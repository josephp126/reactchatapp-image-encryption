/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "constants/ActionTypes";
import callApi from "helpers/callApi";

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default (payload) => (dispatch) => (onSuccess) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  console.log("=========== payload:", payload);
  callApi
    .post("/auth/signup", {
      username: payload.username,
      email: payload.email,
      password: payload.password,
    })
    .then((res) => {
      console.log("________________________________________________", res.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response
          : { error: "Something went wrong, try again" },
      });
    });
};
