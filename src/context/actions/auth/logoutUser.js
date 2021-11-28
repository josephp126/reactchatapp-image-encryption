/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { LOGOUT_USER } from "constants/ActionTypes";
import callApi from "helpers/callApi";

export default () => (dispatch) => {
  callApi
    .post("/logout")
    .then((res) => {})
    .catch((err) => {});
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  dispatch({
    type: LOGOUT_USER,
  });
};
