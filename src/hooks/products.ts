import { useMutation, UseMutationResult, useQuery } from "react-query";
import { getProduct, getProducts } from "../api/products";
import { getUser, loginUser, registerUser } from "../api/auth";
import { ProductType } from "./../containers/Home/Home";
import { loginUserType } from "./../containers/Login/Login";
import { RegisterUserType } from "./../containers/Register/Register";

const useProduct = (id: string | undefined) =>
  useQuery<ProductType | string>(["product", id], () => getProduct(id));

const useProducts = () =>
  useQuery<ProductType[] | string>("products", getProducts);

const useLogin = (
  user: loginUserType
): UseMutationResult<{ jwt: string } | string> =>
  useMutation(() => loginUser(user));

const useRegister = (user: RegisterUserType): any =>
  useMutation(() => registerUser(user));

// const useGetUser = (id: number) => useQuery(["user", id], () => getUser(id));

const useGetUser = () => null;
export { useProducts, useProduct, useLogin, useRegister, useGetUser };
