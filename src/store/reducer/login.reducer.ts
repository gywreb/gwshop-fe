import { loginAction } from "../action";
import { getToken } from "../action/getToken";
import {
  LoginAction,
  LoginResponseData,
  LoginState,
  LoginValidationError,
} from "../types";

const initialState: LoginState = {
  loading: false,
  error: null,
  loggedUser: null,
  accessToken: getToken(),
};

export default function loginReducer(
  state = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case loginAction.LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case loginAction.LOGIN_SUCCESS: {
      const { user, token } = action.payload as LoginResponseData;
      return {
        ...state,
        loading: false,
        loggedUser: user,
        accessToken: token,
      };
    }
    case loginAction.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload as LoginValidationError | string,
      };
    }
    case loginAction.LOGIN_RESET: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}
