import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGOUT_USER,
} from "../../constants/ActionTypes";
const auth = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isLogin: true,
      };
    case LOGOUT_SUCCESS:
      return {
        aaaaaaaaaaa: "sammie",
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLogin: false,
      };

    default:
      return state;
  }
};

export default auth;
