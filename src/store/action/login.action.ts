import axios from "axios";
import Cookies from "js-cookie";
import { ILoginUser } from "../types";
import { LoginThunk } from "./../types/login.type";
export const LOGIN_REQUEST = "[AUTH] LOGIN REQUEST";
export const LOGIN_SUCCESS = "[AUTH] LOGIN SUCCESS";
export const LOGIN_FAILURE = "[AUTH] LOGIN FAILURE";
export const LOGIN_RESET = "[AUTH] LOGIN RESET";
export const GET_CURRENT_USER = "[AUTH] GET CURRENT USER";
export const GET_CURRENT_USER_REQUEST = "[AUTH] GET CURRENT USER REQUEST";
export const LOGOUT = "[AUTH] LOG OUT";

const baseUrl = process.env.NEXT_PUBLIC_API_BASEURL;
const url = baseUrl + "/auth/login";

export const login = (user: ILoginUser): LoginThunk => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
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
    if (data) {
      Cookies.set("token", data.data.token, {
        expires: 7,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.data.token}`;
      dispatch({ type: LOGIN_SUCCESS, payload: data.data });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : "Server down",
    });
  }
};

export const getCurrentUser = (): LoginThunk => async (dispatch) => {
  dispatch({ type: GET_CURRENT_USER_REQUEST });
  try {
    const { data } = await axios({
      url: baseUrl + "/auth/current",
      method: "GET",
    });
    dispatch({ type: GET_CURRENT_USER, payload: data.data });
  } catch (error) {
    dispatch({ type: LOGIN_RESET });
  }
};

export const logout = (): LoginThunk => async (dispatch) => {
  dispatch({ type: GET_CURRENT_USER_REQUEST });
  try {
    await axios({
      url: baseUrl + "/auth/logout",
      method: "GET",
    });
    dispatch({ type: LOGOUT });
  } catch (error) {}
};
