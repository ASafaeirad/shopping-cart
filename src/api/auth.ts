import { httpClient } from "./client";
import { RegisterUserType } from "../containers/Register/Register";

const registerUser = (user: RegisterUserType): Promise<{} | string> =>
  httpClient
    .post(`/auth/local/register`, user)
    .then((res) => res.data)
    .catch((ex) => "Something went wrong...");

export { registerUser };
