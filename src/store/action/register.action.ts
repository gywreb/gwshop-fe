import axios from "axios";
import { IUser, RegisterThunk } from "../types";

export const REGISTER_REQUEST = "[AUTH] REGISTER REQUEST";
export const REGISTER_SUCCESS = "[AUTH] REGISTER SUCCESS";
export const REGISTER_FAILURE = "[AUTH] REGISTER FAILURE";
export const REGISTER_RESET = "[AUTH] REGISTER RESET";

const url = "http://localhost:3000/api/v1/auth/register";

export const register = (user: IUser): RegisterThunk => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios({
      url,
      method: "POST",
      data: user,
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response.message });
  }
};
