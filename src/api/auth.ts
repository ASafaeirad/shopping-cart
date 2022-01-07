import { client } from ".";
import { loginUserType } from "../containers/Login/Login";
import { RegisterUserType } from "../containers/Register/Register";

const loginUser = (user: loginUserType): Promise<{ jwt: string } | string> =>
  client
    .post(`/auth/local`, user)
    .then((res) => res.data)
    .catch(() => "Something went wrong...");

const registerUser = (user: RegisterUserType): Promise<{} | string> =>
  client
    .post(`/auth/local/register`, user)
    .then((res) => res.data)
    .catch((ex) => "Something went wrong...");

const getUser = async (id: number | undefined): Promise<{} | undefined> => {
  if (id !== undefined) {
    return client
      .get(`/users/${id}`)
      .then((res) => res.data)
      .catch(() => "Something went wrong...");
  }
};

export { loginUser, registerUser, getUser };
