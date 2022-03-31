import { authRequest } from "../axios";

export const loginRequest = async (params) => {
  const res = await authRequest({
    url: "/user-packages/login",
    method: "POST",
    data: params,
  });

  return res;
};
