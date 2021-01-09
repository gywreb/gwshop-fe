import axios from "axios";
import Cookies from "js-cookie";
import { ILoginUser } from "../types";
import { LoginThunk } from "./../types/login.type";
export const LOGIN_REQUEST = "[AUTH] LOGIN REQUEST";
export const LOGIN_SUCCESS = "[AUTH] LOGIN SUCCESS";
export const LOGIN_FAILURE = "[AUTH] LOGIN FAILURE";
export const LOGIN_RESET = "[AUTH] LOGIN RESET";

const baseUrl = process.env.NEXT_PUBLIC_API_BASEURL;
const url = baseUrl + "/auth/login";

export const login = (user: ILoginUser): LoginThunk => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios({
      url,
      method: "POST",
      data: user,
    });
    if (data) {
      Cookies.set("token", data.data.token, {
        expires: 7,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
      });
      dispatch({ type: LOGIN_SUCCESS, payload: data.data });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : "Server down",
    });
  }
};
