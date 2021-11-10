import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGOUT_USER,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
} from "../../constants/ActionTypes";
const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
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
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
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
