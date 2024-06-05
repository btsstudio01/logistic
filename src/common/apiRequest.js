import axios from "axios";
import { Modal } from "antd";
import Cookies from "js-cookie";
import { removeAccessToken,removeRefreshToken } from "./auth";
const apiRequest = async function (url, options) {
  console.log(url,options)
  const onSuccess = (response) => {
    // log each request response
    return response;
  };

  const onError = async (error) => {
    if (
      error?.response?.status === 400 ||
      error?.response?.status === 404 ||
      error?.response?.status === 403
    ) {
      Modal.error({
        title: "Error",
        content:
          error?.response?.data?.message ||
          error?.response?.data?.errors[0]?.msg,
      });
    } else if (error?.response?.status === 304) {
      return error?.response?.status;
    } else if (error?.response?.status === 302) {
      Modal.warning({
        title: "Warning",
        content:
          error?.response?.data?.detail?.message ||
          error?.response?.data?.message,
      });
    } else if (error?.response?.status === 401) {
      Modal.error({
        title: "Error",
        content:
          error?.response?.data?.detail?.message ||
          error?.response?.data?.message,
      });
      // Access token expired, try refreshing the token
      const refreshToken = Cookies.get("refresh-token");
      if (refreshToken) {
        try {
          const refreshResponse = await axios.post(
            "http://localhost:8082/users/revive",
            { refreshToken }
          );

          // Update access token and resend the original request
          const newAccessToken = refreshResponse?.data?.accessToken;
          localStorage.setItem("access-token", newAccessToken);

          // Set the new access token in the request headers
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // Resend the original request with the updated access token
          return axios.request(error.config);
        } catch (refreshError) {
          // navaigate krna ha.
          // Token refresh failed, handle accordingly (e.g., log out the user)
          // ...
          removeAccessToken()
          removeRefreshToken()
          
        }
      } else {
          // navaigate krna ha.
        // Refresh token not found, handle accordingly (e.g., log out the user)
        // ...
        removeAccessToken()
        removeRefreshToken()
      
      }
    } else if (error?.response?.status === 500) {
      Modal.error({
        title: "Error",
        content: `Apologies! There is something on our side. We're working on it`,
      });
    }

    return false;
  };

  return axios({
    baseURL: url,
    ...options,
  })
    .then(onSuccess)
    .catch(onError);
};

export default apiRequest;
