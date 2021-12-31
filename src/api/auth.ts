import { client } from ".";
import { loginUserType } from "../containers/Login/Login";
import { RegisterUserType } from "../containers/Register/Register";

export interface loginDataType {}

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

const getUser = async (token: string) => {
  try {
    const { data } = await client.get(`/users`, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    return data;
  } catch (ex: any) {
    console.log(ex.response);
  }
};

export { loginUser, registerUser, getUser };
