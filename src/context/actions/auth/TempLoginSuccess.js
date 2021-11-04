/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { LOGIN_SUCCESS } from "../../../constants/ActionTypes";

export default (payload) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: payload,
  });
};
