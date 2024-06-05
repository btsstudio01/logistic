// auth.js
import Cookies from "js-cookie";

// Function to set the access token in local storage
export const setAccessToken = (token) => {
    localStorage.setItem("access-token", token);
  };
  
  // Function to get the access token from local storage
  export const getAccessToken = () => {
    return localStorage.getItem("access-token");
  };
  
  // Function to remove the access token from local storage
  export const removeAccessToken = () => {
    localStorage.removeItem("access-token");
  };
  
  // Function to set the refresh token in cookies
  export const setRefreshToken = (token) => {
    Cookies.set("refresh-token", token);
  };
  
  // Function to get the refresh token from cookies
  export const getRefreshToken = () => {
    return Cookies.get("refresh-token");
  };
  
  // Function to remove the refresh token from cookies
  export const removeRefreshToken = () => {
    Cookies.remove("refresh-token");
  };
  