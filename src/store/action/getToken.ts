import axios from "axios";
import Cookies from "js-cookie";

export const getToken = () => {
  const token = Cookies.get("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
    return null;
  }
};
