import { useMutation, useQuery } from "react-query";
import { getProduct, getProducts } from "./products";
import { registerUser } from "./auth";
import { ProductType } from "../containers/Home/Home";
import { RegisterUserType } from "../containers/Register/Register";

const useProduct = (id: string | undefined) =>
  useQuery<ProductType | string>(["product", id], () => getProduct(id));

const useProducts = () =>
  useQuery<ProductType[] | string>("products", getProducts);

const useRegister = (user: RegisterUserType): any =>
  useMutation(() => registerUser(user));

export { useProducts, useProduct, useRegister };
