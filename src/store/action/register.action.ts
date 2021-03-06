import axios from "axios";
import { IRegisterUser, RegisterThunk } from "../types";

export const REGISTER_REQUEST = "[AUTH] REGISTER REQUEST";
export const REGISTER_SUCCESS = "[AUTH] REGISTER SUCCESS";
export const REGISTER_FAILURE = "[AUTH] REGISTER FAILURE";
export const REGISTER_RESET = "[AUTH] REGISTER RESET";
export const REGISTER_SUCCESS_CONFIRM = "[AUTH] REGISTER SUCCESS CONFIRM";

const baseUrl = process.env.NEXT_PUBLIC_API_BASEURL;
const url = baseUrl + "/auth/register";

export const register = (user: IRegisterUser): RegisterThunk => async (
  dispatch
) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios({
      url,
      method: "POST",
      data: user,
      auth: {
        username: process.env.NEXT_PUBLIC_BASICAUTH_USER || "",
        password: process.env.NEXT_PUBLIC_BASICAUTH_PASSWORD || "",
      },
    });
    if (data) dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response ? error.response.data.message : "Server down",
    });
  }
};
