import { useMutation } from "react-query";
import { httpClient } from "./client";

export interface LoginBody {
  identifier: string;
  password: string;
}

interface AuthResponse {
  jwt: string;
}

const loginUser = (user: LoginBody) =>
  httpClient.post<AuthResponse>(`/auth/local`, user).then((res) => res.data);

export const useLogin = () =>
  useMutation(loginUser, {
    onSuccess() {
      // Login, Token, State
    },
  });
