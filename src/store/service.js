import axios from "axios";
import { constant } from "./constant";

const { path } = constant;

class DataService {
  constructor() {
    axios.defaults.withCredentials = true;

    axios.interceptors.response.use((response) => {
      const cookies = response.headers["set-cookie"];
      if (cookies) {
        const cookieArray = Array.isArray(cookies)
          ? cookies
          : typeof cookies === "string"
          ? [cookies]
          : [];
        cookieArray.forEach((cookie) => {
          const [cookieName, cookieValue] = cookie.split(";")[0].split("=");
          document.cookie = `${cookieName.trim()}=${cookieValue.trim()}; path=/;`;
        });
      }
      return response;
    });
  }

  setAuthHeader() {
    const authDetail = localStorage.getItem("authorization");
    if (authDetail) {
      const token =
        typeof authDetail === "string" && authDetail.startsWith("{")
          ? JSON.parse(authDetail).token
          : authDetail;
      axios.defaults.headers.common["Authorization"] = token;
    }
  }

  async post(body, url) {
    this.setAuthHeader();
    const response = await axios.post(url, body);
    const responseData = response.data;

    console.log("url:", url, responseData);

    // Save token only for login API
    if (url.includes("/admin/auth/v1/login") && responseData?.success) {
      const loginData = responseData.data;
      if (loginData?.token) {
        localStorage.setItem("authorization", loginData.token);
        axios.defaults.headers.common["Authorization"] = loginData.token;
      }
    }

    return responseData;
  }

  async get(params, url) {
    this.setAuthHeader();
    const response = await axios.get(url, { params });
    return response.data;
  }

  async delete(body, url) {
    this.setAuthHeader();
    const response = await axios.delete(url, { data: body });
    return response.data;
  }
}

export default new DataService();
