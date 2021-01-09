import { ThunkAction } from "redux-thunk";
import { RootState } from ".";
import { loginAction } from "../action";
import { IUserInfo } from "./user.type";

export interface LoginValidationError {
  [key: string]: string;
}

export interface LoginState {
  loading: boolean;
  error: LoginValidationError | string | null;
  loggedUser: IUserInfo | null;
  accessToken: string | null;
}

export interface LoginResponseData {
  user: IUserInfo;
  token: string;
}

export interface LoginAction {
  type:
    | typeof loginAction.LOGIN_REQUEST
    | typeof loginAction.LOGIN_SUCCESS
    | typeof loginAction.LOGIN_FAILURE
    | typeof loginAction.LOGIN_RESET;
  payload?: LoginResponseData | LoginValidationError | string;
}

export type LoginThunk = ThunkAction<void, RootState, null, LoginAction>;
