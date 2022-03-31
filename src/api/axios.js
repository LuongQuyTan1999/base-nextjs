import axios from "axios";
import { apiBaseUrl } from "/src/utils/constants";
import { LocalStorage } from "/src/lib/localStorage";
import { PROJECT_AUTH_TOKEN } from "/src/utils/constants";

const authRequest = axios.create({
  baseURL: apiBaseUrl,
});

const SSRRequest = axios.create({
  timeout: 2000,
  baseURL: apiBaseUrl,
});

// Add a request interceptor
authRequest.interceptors.request.use(async (request) => {
  const auth = LocalStorage.get(PROJECT_AUTH_TOKEN);

  if (auth) {
    request.headers.Authorization = `Bearer ${auth}`;
  }
  return request;
});

authRequest.interceptors.response.use(
  (response) => {
    return response.data.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      LocalStorage.remove(PROJECT_AUTH_TOKEN);
      if (typeof window !== "undefined") {
        window.open("/auth/login", "_self");
      }
    } else {
      // Retried faile => Log user out
      // await signOut(getAuth());
      // await removeServerCookieRequuest();
    }
    return Promise.reject(error.response.data);
  }
);

export { authRequest, SSRRequest };
