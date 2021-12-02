/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import { SELECT_CHAT } from "constants/ActionTypes";
import callApi from "helpers/callApi";

export default ({ type, selectedChat }) =>
  (dispatch) =>
  (onSuccess) => {
    dispatch({
      type: SELECT_CHAT,
      payload: {
        type: type,
        selectedChat: selectedChat,
      },
    });
    callApi
      .get(`/message/${selectedChat.id}`)
      .then((res) => {
        onSuccess(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
