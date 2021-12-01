import { SELECT_CHAT } from "constants/ActionTypes";

const selectedChat = (state, { type, payload }) => {
  switch (type) {
    case SELECT_CHAT:
      return {
        ...state,
        type: payload.type,
        selectedChat: payload.selectedChat,
      };

    default:
      return state;
  }
};

export default selectedChat;
