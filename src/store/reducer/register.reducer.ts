import { registerAction } from "../action";
import {
  IUser,
  RegisterAction,
  RegisterState,
  ValidationError,
} from "../types";

const initialState: RegisterState = {
  loading: false,
  error: null,
  user: null,
};

export default function registerReducer(
  state = initialState,
  action: RegisterAction
): RegisterState {
  switch (action.type) {
    case registerAction.REGISTER_REQUEST: {
      return { ...state, loading: true };
    }
    case registerAction.REGISTER_SUCCESS: {
      return { ...state, user: action.payload as IUser, loading: false };
    }
    case registerAction.REGISTER_FAILURE: {
      return {
        ...state,
        error: action.payload as string | ValidationError,
        loading: false,
      };
    }
    case registerAction.REGISTER_RESET: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}
