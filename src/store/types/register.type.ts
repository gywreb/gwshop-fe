import { ThunkAction } from "redux-thunk";
import { registerAction } from "../action";
import { IUser } from "./";
import { RootState } from "./index";

export type ValidationError = {
  [key: string]: string;
};

export interface RegisterState {
  loading: boolean;
  error: string | ValidationError | null;
  user: IUser | null;
}

export interface RegisterAction {
  type:
    | typeof registerAction.REGISTER_REQUEST
    | typeof registerAction.REGISTER_SUCCESS
    | typeof registerAction.REGISTER_FAILURE
    | typeof registerAction.REGISTER_RESET;
  payload?: IUser | string;
}

export type RegisterThunk = ThunkAction<void, RootState, null, RegisterAction>;
